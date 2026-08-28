# `certificatemanagerAcmeEndpoint` Submodule <a name="`certificatemanagerAcmeEndpoint` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeEndpoint <a name="CertificatemanagerAcmeEndpoint" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint awscc_certificatemanager_acme_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

new certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint(scope: Construct, id: string, config: CertificatemanagerAcmeEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig">CertificatemanagerAcmeEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig">CertificatemanagerAcmeEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority">putCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags">putCertificateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetCertificateTags">resetCertificateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetContact">resetContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificateAuthority` <a name="putCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority"></a>

```typescript
public putCertificateAuthority(value: CertificatemanagerAcmeEndpointCertificateAuthority): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

---

##### `putCertificateTags` <a name="putCertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags"></a>

```typescript
public putCertificateTags(value: IResolvable | CertificatemanagerAcmeEndpointCertificateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags"></a>

```typescript
public putTags(value: IResolvable | CertificatemanagerAcmeEndpointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]

---

##### `resetCertificateTags` <a name="resetCertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetCertificateTags"></a>

```typescript
public resetCertificateTags(): void
```

##### `resetContact` <a name="resetContact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetContact"></a>

```typescript
public resetContact(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CertificatemanagerAcmeEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificatemanagerAcmeEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificatemanagerAcmeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.acmeEndpointArn">acmeEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthority">certificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTags">certificateTags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList">CertificatemanagerAcmeEndpointCertificateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList">CertificatemanagerAcmeEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehaviorInput">authorizationBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthorityInput">certificateAuthorityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTagsInput">certificateTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contactInput">contactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehavior">authorizationBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contact">contact</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `acmeEndpointArn`<sup>Required</sup> <a name="acmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.acmeEndpointArn"></a>

```typescript
public readonly acmeEndpointArn: string;
```

- *Type:* string

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference</a>

---

##### `certificateTags`<sup>Required</sup> <a name="certificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTags"></a>

```typescript
public readonly certificateTags: CertificatemanagerAcmeEndpointCertificateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList">CertificatemanagerAcmeEndpointCertificateTagsList</a>

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tags"></a>

```typescript
public readonly tags: CertificatemanagerAcmeEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList">CertificatemanagerAcmeEndpointTagsList</a>

---

##### `authorizationBehaviorInput`<sup>Optional</sup> <a name="authorizationBehaviorInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehaviorInput"></a>

```typescript
public readonly authorizationBehaviorInput: string;
```

- *Type:* string

---

##### `certificateAuthorityInput`<sup>Optional</sup> <a name="certificateAuthorityInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthorityInput"></a>

```typescript
public readonly certificateAuthorityInput: IResolvable | CertificatemanagerAcmeEndpointCertificateAuthority;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

---

##### `certificateTagsInput`<sup>Optional</sup> <a name="certificateTagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTagsInput"></a>

```typescript
public readonly certificateTagsInput: IResolvable | CertificatemanagerAcmeEndpointCertificateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]

---

##### `contactInput`<sup>Optional</sup> <a name="contactInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contactInput"></a>

```typescript
public readonly contactInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CertificatemanagerAcmeEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]

---

##### `authorizationBehavior`<sup>Required</sup> <a name="authorizationBehavior" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehavior"></a>

```typescript
public readonly authorizationBehavior: string;
```

- *Type:* string

---

##### `contact`<sup>Required</sup> <a name="contact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contact"></a>

```typescript
public readonly contact: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeEndpointCertificateAuthority <a name="CertificatemanagerAcmeEndpointCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

const certificatemanagerAcmeEndpointCertificateAuthority: certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.property.publicCertificateAuthority">publicCertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a></code> | Configuration for the public certificate authority. |

---

##### `publicCertificateAuthority`<sup>Required</sup> <a name="publicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.property.publicCertificateAuthority"></a>

```typescript
public readonly publicCertificateAuthority: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

Configuration for the public certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#public_certificate_authority CertificatemanagerAcmeEndpoint#public_certificate_authority}

---

### CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority <a name="CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

const certificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority: certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.property.allowedKeyAlgorithms">allowedKeyAlgorithms</a></code> | <code>string[]</code> | The allowed key algorithms for certificates issued via this endpoint. |

---

##### `allowedKeyAlgorithms`<sup>Optional</sup> <a name="allowedKeyAlgorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.property.allowedKeyAlgorithms"></a>

```typescript
public readonly allowedKeyAlgorithms: string[];
```

- *Type:* string[]

The allowed key algorithms for certificates issued via this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#allowed_key_algorithms CertificatemanagerAcmeEndpoint#allowed_key_algorithms}

---

### CertificatemanagerAcmeEndpointCertificateTags <a name="CertificatemanagerAcmeEndpointCertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

const certificatemanagerAcmeEndpointCertificateTags: certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#key CertificatemanagerAcmeEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#value CertificatemanagerAcmeEndpoint#value}

---

### CertificatemanagerAcmeEndpointConfig <a name="CertificatemanagerAcmeEndpointConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

const certificatemanagerAcmeEndpointConfig: certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.authorizationBehavior">authorizationBehavior</a></code> | <code>string</code> | The authorization behavior for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateAuthority">certificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a></code> | The certificate authority configuration for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateTags">certificateTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]</code> | Tags applied to certificates issued via this endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.contact">contact</a></code> | <code>string</code> | Whether contact information is required for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]</code> | Tags associated with the ACME endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorizationBehavior`<sup>Required</sup> <a name="authorizationBehavior" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.authorizationBehavior"></a>

```typescript
public readonly authorizationBehavior: string;
```

- *Type:* string

The authorization behavior for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#authorization_behavior CertificatemanagerAcmeEndpoint#authorization_behavior}

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: CertificatemanagerAcmeEndpointCertificateAuthority;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

The certificate authority configuration for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#certificate_authority CertificatemanagerAcmeEndpoint#certificate_authority}

---

##### `certificateTags`<sup>Optional</sup> <a name="certificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateTags"></a>

```typescript
public readonly certificateTags: IResolvable | CertificatemanagerAcmeEndpointCertificateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]

Tags applied to certificates issued via this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#certificate_tags CertificatemanagerAcmeEndpoint#certificate_tags}

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.contact"></a>

```typescript
public readonly contact: string;
```

- *Type:* string

Whether contact information is required for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#contact CertificatemanagerAcmeEndpoint#contact}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CertificatemanagerAcmeEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]

Tags associated with the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#tags CertificatemanagerAcmeEndpoint#tags}

---

### CertificatemanagerAcmeEndpointTags <a name="CertificatemanagerAcmeEndpointTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

const certificatemanagerAcmeEndpointTags: certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#key CertificatemanagerAcmeEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_endpoint#value CertificatemanagerAcmeEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference <a name="CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

new certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority">putPublicCertificateAuthority</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicCertificateAuthority` <a name="putPublicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority"></a>

```typescript
public putPublicCertificateAuthority(value: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthority">publicCertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthorityInput">publicCertificateAuthorityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicCertificateAuthority`<sup>Required</sup> <a name="publicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthority"></a>

```typescript
public readonly publicCertificateAuthority: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference</a>

---

##### `publicCertificateAuthorityInput`<sup>Optional</sup> <a name="publicCertificateAuthorityInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthorityInput"></a>

```typescript
public readonly publicCertificateAuthorityInput: IResolvable | CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeEndpointCertificateAuthority;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

---


### CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference <a name="CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

new certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resetAllowedKeyAlgorithms">resetAllowedKeyAlgorithms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedKeyAlgorithms` <a name="resetAllowedKeyAlgorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resetAllowedKeyAlgorithms"></a>

```typescript
public resetAllowedKeyAlgorithms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithmsInput">allowedKeyAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithms">allowedKeyAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedKeyAlgorithmsInput`<sup>Optional</sup> <a name="allowedKeyAlgorithmsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithmsInput"></a>

```typescript
public readonly allowedKeyAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `allowedKeyAlgorithms`<sup>Required</sup> <a name="allowedKeyAlgorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithms"></a>

```typescript
public readonly allowedKeyAlgorithms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

---


### CertificatemanagerAcmeEndpointCertificateTagsList <a name="CertificatemanagerAcmeEndpointCertificateTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

new certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get"></a>

```typescript
public get(index: number): CertificatemanagerAcmeEndpointCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeEndpointCertificateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]

---


### CertificatemanagerAcmeEndpointCertificateTagsOutputReference <a name="CertificatemanagerAcmeEndpointCertificateTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

new certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeEndpointCertificateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>

---


### CertificatemanagerAcmeEndpointTagsList <a name="CertificatemanagerAcmeEndpointTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

new certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get"></a>

```typescript
public get(index: number): CertificatemanagerAcmeEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]

---


### CertificatemanagerAcmeEndpointTagsOutputReference <a name="CertificatemanagerAcmeEndpointTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer"></a>

```typescript
import { certificatemanagerAcmeEndpoint } from '@cdktn/provider-awscc'

new certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatemanagerAcmeEndpointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>

---



