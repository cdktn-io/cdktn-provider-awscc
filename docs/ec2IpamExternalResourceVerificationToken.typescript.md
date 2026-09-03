# `ec2IpamExternalResourceVerificationToken` Submodule <a name="`ec2IpamExternalResourceVerificationToken` Submodule" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamExternalResourceVerificationToken <a name="Ec2IpamExternalResourceVerificationToken" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token awscc_ec2_ipam_external_resource_verification_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer"></a>

```typescript
import { ec2IpamExternalResourceVerificationToken } from '@cdktn/provider-awscc'

new ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken(scope: Construct, id: string, config: Ec2IpamExternalResourceVerificationTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig">Ec2IpamExternalResourceVerificationTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig">Ec2IpamExternalResourceVerificationTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2IpamExternalResourceVerificationTokenTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags">Ec2IpamExternalResourceVerificationTokenTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamExternalResourceVerificationToken resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isConstruct"></a>

```typescript
import { ec2IpamExternalResourceVerificationToken } from '@cdktn/provider-awscc'

ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformElement"></a>

```typescript
import { ec2IpamExternalResourceVerificationToken } from '@cdktn/provider-awscc'

ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformResource"></a>

```typescript
import { ec2IpamExternalResourceVerificationToken } from '@cdktn/provider-awscc'

ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport"></a>

```typescript
import { ec2IpamExternalResourceVerificationToken } from '@cdktn/provider-awscc'

ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2IpamExternalResourceVerificationToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2IpamExternalResourceVerificationToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2IpamExternalResourceVerificationToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamExternalResourceVerificationToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamArn">ipamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenArn">ipamExternalResourceVerificationTokenArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenId">ipamExternalResourceVerificationTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamRegion">ipamRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.notAfter">notAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList">Ec2IpamExternalResourceVerificationTokenTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tokenName">tokenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tokenValue">tokenValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamIdInput">ipamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags">Ec2IpamExternalResourceVerificationTokenTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamId">ipamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamArn`<sup>Required</sup> <a name="ipamArn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamArn"></a>

```typescript
public readonly ipamArn: string;
```

- *Type:* string

---

##### `ipamExternalResourceVerificationTokenArn`<sup>Required</sup> <a name="ipamExternalResourceVerificationTokenArn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenArn"></a>

```typescript
public readonly ipamExternalResourceVerificationTokenArn: string;
```

- *Type:* string

---

##### `ipamExternalResourceVerificationTokenId`<sup>Required</sup> <a name="ipamExternalResourceVerificationTokenId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamExternalResourceVerificationTokenId"></a>

```typescript
public readonly ipamExternalResourceVerificationTokenId: string;
```

- *Type:* string

---

##### `ipamRegion`<sup>Required</sup> <a name="ipamRegion" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamRegion"></a>

```typescript
public readonly ipamRegion: string;
```

- *Type:* string

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tags"></a>

```typescript
public readonly tags: Ec2IpamExternalResourceVerificationTokenTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList">Ec2IpamExternalResourceVerificationTokenTagsList</a>

---

##### `tokenName`<sup>Required</sup> <a name="tokenName" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tokenName"></a>

```typescript
public readonly tokenName: string;
```

- *Type:* string

---

##### `tokenValue`<sup>Required</sup> <a name="tokenValue" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tokenValue"></a>

```typescript
public readonly tokenValue: string;
```

- *Type:* string

---

##### `ipamIdInput`<sup>Optional</sup> <a name="ipamIdInput" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamIdInput"></a>

```typescript
public readonly ipamIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2IpamExternalResourceVerificationTokenTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags">Ec2IpamExternalResourceVerificationTokenTags</a>[]

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamExternalResourceVerificationTokenConfig <a name="Ec2IpamExternalResourceVerificationTokenConfig" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.Initializer"></a>

```typescript
import { ec2IpamExternalResourceVerificationToken } from '@cdktn/provider-awscc'

const ec2IpamExternalResourceVerificationTokenConfig: ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.ipamId">ipamId</a></code> | <code>string</code> | The ID of the IPAM that will create the token. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags">Ec2IpamExternalResourceVerificationTokenTags</a>[]</code> | The tags for the token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

The ID of the IPAM that will create the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token#ipam_id Ec2IpamExternalResourceVerificationToken#ipam_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2IpamExternalResourceVerificationTokenTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags">Ec2IpamExternalResourceVerificationTokenTags</a>[]

The tags for the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token#tags Ec2IpamExternalResourceVerificationToken#tags}

---

### Ec2IpamExternalResourceVerificationTokenTags <a name="Ec2IpamExternalResourceVerificationTokenTags" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags.Initializer"></a>

```typescript
import { ec2IpamExternalResourceVerificationToken } from '@cdktn/provider-awscc'

const ec2IpamExternalResourceVerificationTokenTags: ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token#key Ec2IpamExternalResourceVerificationToken#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_ipam_external_resource_verification_token#value Ec2IpamExternalResourceVerificationToken#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamExternalResourceVerificationTokenTagsList <a name="Ec2IpamExternalResourceVerificationTokenTagsList" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer"></a>

```typescript
import { ec2IpamExternalResourceVerificationToken } from '@cdktn/provider-awscc'

new ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.get"></a>

```typescript
public get(index: number): Ec2IpamExternalResourceVerificationTokenTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags">Ec2IpamExternalResourceVerificationTokenTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamExternalResourceVerificationTokenTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags">Ec2IpamExternalResourceVerificationTokenTags</a>[]

---


### Ec2IpamExternalResourceVerificationTokenTagsOutputReference <a name="Ec2IpamExternalResourceVerificationTokenTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer"></a>

```typescript
import { ec2IpamExternalResourceVerificationToken } from '@cdktn/provider-awscc'

new ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags">Ec2IpamExternalResourceVerificationTokenTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamExternalResourceVerificationTokenTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamExternalResourceVerificationToken.Ec2IpamExternalResourceVerificationTokenTags">Ec2IpamExternalResourceVerificationTokenTags</a>

---



