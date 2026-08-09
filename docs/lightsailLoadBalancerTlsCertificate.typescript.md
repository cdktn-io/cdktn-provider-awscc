# `lightsailLoadBalancerTlsCertificate` Submodule <a name="`lightsailLoadBalancerTlsCertificate` Submodule" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailLoadBalancerTlsCertificate <a name="LightsailLoadBalancerTlsCertificate" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_load_balancer_tls_certificate awscc_lightsail_load_balancer_tls_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer"></a>

```typescript
import { lightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

new lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate(scope: Construct, id: string, config: LightsailLoadBalancerTlsCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig">LightsailLoadBalancerTlsCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig">LightsailLoadBalancerTlsCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetCertificateAlternativeNames">resetCertificateAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetHttpsRedirectionEnabled">resetHttpsRedirectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetIsAttached">resetIsAttached</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCertificateAlternativeNames` <a name="resetCertificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetCertificateAlternativeNames"></a>

```typescript
public resetCertificateAlternativeNames(): void
```

##### `resetHttpsRedirectionEnabled` <a name="resetHttpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetHttpsRedirectionEnabled"></a>

```typescript
public resetHttpsRedirectionEnabled(): void
```

##### `resetIsAttached` <a name="resetIsAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetIsAttached"></a>

```typescript
public resetIsAttached(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct"></a>

```typescript
import { lightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement"></a>

```typescript
import { lightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource"></a>

```typescript
import { lightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport"></a>

```typescript
import { lightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailLoadBalancerTlsCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailLoadBalancerTlsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_load_balancer_tls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailLoadBalancerTlsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn">loadBalancerTlsCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNamesInput">certificateAlternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainNameInput">certificateDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateNameInput">certificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabledInput">httpsRedirectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttachedInput">isAttachedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerNameInput">loadBalancerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames">certificateAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainName">certificateDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled">httpsRedirectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttached">isAttached</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerTlsCertificateArn`<sup>Required</sup> <a name="loadBalancerTlsCertificateArn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn"></a>

```typescript
public readonly loadBalancerTlsCertificateArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `certificateAlternativeNamesInput`<sup>Optional</sup> <a name="certificateAlternativeNamesInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNamesInput"></a>

```typescript
public readonly certificateAlternativeNamesInput: string[];
```

- *Type:* string[]

---

##### `certificateDomainNameInput`<sup>Optional</sup> <a name="certificateDomainNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainNameInput"></a>

```typescript
public readonly certificateDomainNameInput: string;
```

- *Type:* string

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateNameInput"></a>

```typescript
public readonly certificateNameInput: string;
```

- *Type:* string

---

##### `httpsRedirectionEnabledInput`<sup>Optional</sup> <a name="httpsRedirectionEnabledInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabledInput"></a>

```typescript
public readonly httpsRedirectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isAttachedInput`<sup>Optional</sup> <a name="isAttachedInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttachedInput"></a>

```typescript
public readonly isAttachedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loadBalancerNameInput`<sup>Optional</sup> <a name="loadBalancerNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerNameInput"></a>

```typescript
public readonly loadBalancerNameInput: string;
```

- *Type:* string

---

##### `certificateAlternativeNames`<sup>Required</sup> <a name="certificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames"></a>

```typescript
public readonly certificateAlternativeNames: string[];
```

- *Type:* string[]

---

##### `certificateDomainName`<sup>Required</sup> <a name="certificateDomainName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainName"></a>

```typescript
public readonly certificateDomainName: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `httpsRedirectionEnabled`<sup>Required</sup> <a name="httpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled"></a>

```typescript
public readonly httpsRedirectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isAttached`<sup>Required</sup> <a name="isAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttached"></a>

```typescript
public readonly isAttached: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailLoadBalancerTlsCertificateConfig <a name="LightsailLoadBalancerTlsCertificateConfig" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.Initializer"></a>

```typescript
import { lightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

const lightsailLoadBalancerTlsCertificateConfig: lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateDomainName">certificateDomainName</a></code> | <code>string</code> | The domain name (e.g., example.com ) for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateName">certificateName</a></code> | <code>string</code> | The SSL/TLS certificate name. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateAlternativeNames">certificateAlternativeNames</a></code> | <code>string[]</code> | An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.httpsRedirectionEnabled">httpsRedirectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.isAttached">isAttached</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, the SSL/TLS certificate is attached to the Lightsail load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificateDomainName`<sup>Required</sup> <a name="certificateDomainName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateDomainName"></a>

```typescript
public readonly certificateDomainName: string;
```

- *Type:* string

The domain name (e.g., example.com ) for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_domain_name LightsailLoadBalancerTlsCertificate#certificate_domain_name}

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

The SSL/TLS certificate name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_name LightsailLoadBalancerTlsCertificate#certificate_name}

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_load_balancer_tls_certificate#load_balancer_name LightsailLoadBalancerTlsCertificate#load_balancer_name}

---

##### `certificateAlternativeNames`<sup>Optional</sup> <a name="certificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateAlternativeNames"></a>

```typescript
public readonly certificateAlternativeNames: string[];
```

- *Type:* string[]

An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_alternative_names LightsailLoadBalancerTlsCertificate#certificate_alternative_names}

---

##### `httpsRedirectionEnabled`<sup>Optional</sup> <a name="httpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.httpsRedirectionEnabled"></a>

```typescript
public readonly httpsRedirectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_load_balancer_tls_certificate#https_redirection_enabled LightsailLoadBalancerTlsCertificate#https_redirection_enabled}

---

##### `isAttached`<sup>Optional</sup> <a name="isAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.isAttached"></a>

```typescript
public readonly isAttached: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, the SSL/TLS certificate is attached to the Lightsail load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lightsail_load_balancer_tls_certificate#is_attached LightsailLoadBalancerTlsCertificate#is_attached}

---



