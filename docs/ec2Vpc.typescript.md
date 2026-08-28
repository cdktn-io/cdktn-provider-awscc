# `ec2Vpc` Submodule <a name="`ec2Vpc` Submodule" id="@cdktn/provider-awscc.ec2Vpc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Vpc <a name="Ec2Vpc" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc awscc_ec2_vpc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2Vpc(scope: Construct, id: string, config?: Ec2VpcConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig">Ec2VpcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig">Ec2VpcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.putVpcEncryptionControl">putVpcEncryptionControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetEnableDnsHostnames">resetEnableDnsHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetEnableDnsSupport">resetEnableDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetInstanceTenancy">resetInstanceTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetIpv4IpamPoolId">resetIpv4IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetIpv4NetmaskLength">resetIpv4NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetVpcEncryptionControl">resetVpcEncryptionControl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2VpcTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags">Ec2VpcTags</a>[]

---

##### `putVpcEncryptionControl` <a name="putVpcEncryptionControl" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.putVpcEncryptionControl"></a>

```typescript
public putVpcEncryptionControl(value: Ec2VpcVpcEncryptionControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.putVpcEncryptionControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl">Ec2VpcVpcEncryptionControl</a>

---

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetEnableDnsHostnames` <a name="resetEnableDnsHostnames" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetEnableDnsHostnames"></a>

```typescript
public resetEnableDnsHostnames(): void
```

##### `resetEnableDnsSupport` <a name="resetEnableDnsSupport" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetEnableDnsSupport"></a>

```typescript
public resetEnableDnsSupport(): void
```

##### `resetInstanceTenancy` <a name="resetInstanceTenancy" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetInstanceTenancy"></a>

```typescript
public resetInstanceTenancy(): void
```

##### `resetIpv4IpamPoolId` <a name="resetIpv4IpamPoolId" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetIpv4IpamPoolId"></a>

```typescript
public resetIpv4IpamPoolId(): void
```

##### `resetIpv4NetmaskLength` <a name="resetIpv4NetmaskLength" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetIpv4NetmaskLength"></a>

```typescript
public resetIpv4NetmaskLength(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcEncryptionControl` <a name="resetVpcEncryptionControl" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.resetVpcEncryptionControl"></a>

```typescript
public resetVpcEncryptionControl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2Vpc resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.isConstruct"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

ec2Vpc.Ec2Vpc.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.isTerraformElement"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

ec2Vpc.Ec2Vpc.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.isTerraformResource"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

ec2Vpc.Ec2Vpc.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.generateConfigForImport"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

ec2Vpc.Ec2Vpc.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2Vpc resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2Vpc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2Vpc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Vpc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.cidrBlockAssociations">cidrBlockAssociations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.defaultNetworkAcl">defaultNetworkAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.defaultSecurityGroup">defaultSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList">Ec2VpcTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.vpcEncryptionControl">vpcEncryptionControl</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference">Ec2VpcVpcEncryptionControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.enableDnsHostnamesInput">enableDnsHostnamesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.enableDnsSupportInput">enableDnsSupportInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.instanceTenancyInput">instanceTenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.ipv4IpamPoolIdInput">ipv4IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.ipv4NetmaskLengthInput">ipv4NetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags">Ec2VpcTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.vpcEncryptionControlInput">vpcEncryptionControlInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl">Ec2VpcVpcEncryptionControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.instanceTenancy">instanceTenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cidrBlockAssociations`<sup>Required</sup> <a name="cidrBlockAssociations" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.cidrBlockAssociations"></a>

```typescript
public readonly cidrBlockAssociations: string[];
```

- *Type:* string[]

---

##### `defaultNetworkAcl`<sup>Required</sup> <a name="defaultNetworkAcl" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.defaultNetworkAcl"></a>

```typescript
public readonly defaultNetworkAcl: string;
```

- *Type:* string

---

##### `defaultSecurityGroup`<sup>Required</sup> <a name="defaultSecurityGroup" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.defaultSecurityGroup"></a>

```typescript
public readonly defaultSecurityGroup: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.tags"></a>

```typescript
public readonly tags: Ec2VpcTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList">Ec2VpcTagsList</a>

---

##### `vpcEncryptionControl`<sup>Required</sup> <a name="vpcEncryptionControl" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.vpcEncryptionControl"></a>

```typescript
public readonly vpcEncryptionControl: Ec2VpcVpcEncryptionControlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference">Ec2VpcVpcEncryptionControlOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `enableDnsHostnamesInput`<sup>Optional</sup> <a name="enableDnsHostnamesInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.enableDnsHostnamesInput"></a>

```typescript
public readonly enableDnsHostnamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableDnsSupportInput`<sup>Optional</sup> <a name="enableDnsSupportInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.enableDnsSupportInput"></a>

```typescript
public readonly enableDnsSupportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `instanceTenancyInput`<sup>Optional</sup> <a name="instanceTenancyInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.instanceTenancyInput"></a>

```typescript
public readonly instanceTenancyInput: string;
```

- *Type:* string

---

##### `ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="ipv4IpamPoolIdInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.ipv4IpamPoolIdInput"></a>

```typescript
public readonly ipv4IpamPoolIdInput: string;
```

- *Type:* string

---

##### `ipv4NetmaskLengthInput`<sup>Optional</sup> <a name="ipv4NetmaskLengthInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.ipv4NetmaskLengthInput"></a>

```typescript
public readonly ipv4NetmaskLengthInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2VpcTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags">Ec2VpcTags</a>[]

---

##### `vpcEncryptionControlInput`<sup>Optional</sup> <a name="vpcEncryptionControlInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.vpcEncryptionControlInput"></a>

```typescript
public readonly vpcEncryptionControlInput: IResolvable | Ec2VpcVpcEncryptionControl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl">Ec2VpcVpcEncryptionControl</a>

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `enableDnsHostnames`<sup>Required</sup> <a name="enableDnsHostnames" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.enableDnsHostnames"></a>

```typescript
public readonly enableDnsHostnames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableDnsSupport`<sup>Required</sup> <a name="enableDnsSupport" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.enableDnsSupport"></a>

```typescript
public readonly enableDnsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `instanceTenancy`<sup>Required</sup> <a name="instanceTenancy" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.instanceTenancy"></a>

```typescript
public readonly instanceTenancy: string;
```

- *Type:* string

---

##### `ipv4IpamPoolId`<sup>Required</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.ipv4IpamPoolId"></a>

```typescript
public readonly ipv4IpamPoolId: string;
```

- *Type:* string

---

##### `ipv4NetmaskLength`<sup>Required</sup> <a name="ipv4NetmaskLength" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.ipv4NetmaskLength"></a>

```typescript
public readonly ipv4NetmaskLength: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2Vpc.Ec2Vpc.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcConfig <a name="Ec2VpcConfig" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcConfig: ec2Vpc.Ec2VpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | The IPv4 network range for the VPC, in CIDR notation. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.enableDnsHostnames">enableDnsHostnames</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the instances launched in the VPC get DNS hostnames. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.enableDnsSupport">enableDnsSupport</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the DNS resolution is supported for the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.instanceTenancy">instanceTenancy</a></code> | <code>string</code> | The allowed tenancy of instances launched into the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>string</code> | The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>number</code> | The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags">Ec2VpcTags</a>[]</code> | The tags for the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.vpcEncryptionControl">vpcEncryptionControl</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl">Ec2VpcVpcEncryptionControl</a></code> | Describes the configuration and state of VPC encryption controls. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

The IPv4 network range for the VPC, in CIDR notation.

For example, ``10.0.0.0/16``. We modify the specified CIDR block to its canonical form; for example, if you specify ``100.68.0.18/18``, we modify it to ``100.68.0.0/18``.
 You must specify either``CidrBlock`` or ``Ipv4IpamPoolId``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#cidr_block Ec2Vpc#cidr_block}

---

##### `enableDnsHostnames`<sup>Optional</sup> <a name="enableDnsHostnames" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.enableDnsHostnames"></a>

```typescript
public readonly enableDnsHostnames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the instances launched in the VPC get DNS hostnames.

If enabled, instances in the VPC get DNS hostnames; otherwise, they do not. Disabled by default for nondefault VPCs. For more information, see [DNS attributes in your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support).
 You can only enable DNS hostnames if you've enabled DNS support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#enable_dns_hostnames Ec2Vpc#enable_dns_hostnames}

---

##### `enableDnsSupport`<sup>Optional</sup> <a name="enableDnsSupport" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.enableDnsSupport"></a>

```typescript
public readonly enableDnsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the DNS resolution is supported for the VPC.

If enabled, queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is not enabled. Enabled by default. For more information, see [DNS attributes in your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#enable_dns_support Ec2Vpc#enable_dns_support}

---

##### `instanceTenancy`<sup>Optional</sup> <a name="instanceTenancy" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.instanceTenancy"></a>

```typescript
public readonly instanceTenancy: string;
```

- *Type:* string

The allowed tenancy of instances launched into the VPC.

+  ``default``: An instance launched into the VPC runs on shared hardware by default, unless you explicitly specify a different tenancy during instance launch.
  +  ``dedicated``: An instance launched into the VPC runs on dedicated hardware by default, unless you explicitly specify a tenancy of ``host`` during instance launch. You cannot specify a tenancy of ``default`` during instance launch.
  
 Updating ``InstanceTenancy`` requires no replacement only if you are updating its value from ``dedicated`` to ``default``. Updating ``InstanceTenancy`` from ``default`` to ``dedicated`` requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#instance_tenancy Ec2Vpc#instance_tenancy}

---

##### `ipv4IpamPoolId`<sup>Optional</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.ipv4IpamPoolId"></a>

```typescript
public readonly ipv4IpamPoolId: string;
```

- *Type:* string

The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR.

For more information, see [What is IPAM?](https://docs.aws.amazon.com//vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.
 You must specify either``CidrBlock`` or ``Ipv4IpamPoolId``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#ipv_4_ipam_pool_id Ec2Vpc#ipv_4_ipam_pool_id}

---

##### `ipv4NetmaskLength`<sup>Optional</sup> <a name="ipv4NetmaskLength" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.ipv4NetmaskLength"></a>

```typescript
public readonly ipv4NetmaskLength: number;
```

- *Type:* number

The netmask length of the IPv4 CIDR you want to allocate to this VPC from an Amazon VPC IP Address Manager (IPAM) pool.

For more information about IPAM, see [What is IPAM?](https://docs.aws.amazon.com//vpc/latest/ipam/what-is-it-ipam.html) in the *Amazon VPC IPAM User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#ipv_4_netmask_length Ec2Vpc#ipv_4_netmask_length}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2VpcTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags">Ec2VpcTags</a>[]

The tags for the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#tags Ec2Vpc#tags}

---

##### `vpcEncryptionControl`<sup>Optional</sup> <a name="vpcEncryptionControl" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcConfig.property.vpcEncryptionControl"></a>

```typescript
public readonly vpcEncryptionControl: Ec2VpcVpcEncryptionControl;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl">Ec2VpcVpcEncryptionControl</a>

Describes the configuration and state of VPC encryption controls.

For more information, see [Enforce VPC encryption in transit](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html) in the *Amazon VPC User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#vpc_encryption_control Ec2Vpc#vpc_encryption_control}

---

### Ec2VpcTags <a name="Ec2VpcTags" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcTags: ec2Vpc.Ec2VpcTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#key Ec2Vpc#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#value Ec2Vpc#value}

---

### Ec2VpcVpcEncryptionControl <a name="Ec2VpcVpcEncryptionControl" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcVpcEncryptionControl: ec2Vpc.Ec2VpcVpcEncryptionControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.egressOnlyInternetGatewayExclusion">egressOnlyInternetGatewayExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#egress_only_internet_gateway_exclusion Ec2Vpc#egress_only_internet_gateway_exclusion}. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.elasticFileSystemExclusion">elasticFileSystemExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#elastic_file_system_exclusion Ec2Vpc#elastic_file_system_exclusion}. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.internetGatewayExclusion">internetGatewayExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#internet_gateway_exclusion Ec2Vpc#internet_gateway_exclusion}. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.lambdaExclusion">lambdaExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#lambda_exclusion Ec2Vpc#lambda_exclusion}. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.mode">mode</a></code> | <code>string</code> | The encryption mode for the VPC Encryption Control configuration. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.natGatewayExclusion">natGatewayExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#nat_gateway_exclusion Ec2Vpc#nat_gateway_exclusion}. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.virtualPrivateGatewayExclusion">virtualPrivateGatewayExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#virtual_private_gateway_exclusion Ec2Vpc#virtual_private_gateway_exclusion}. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.vpcLatticeExclusion">vpcLatticeExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#vpc_lattice_exclusion Ec2Vpc#vpc_lattice_exclusion}. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.vpcPeeringExclusion">vpcPeeringExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#vpc_peering_exclusion Ec2Vpc#vpc_peering_exclusion}. |

---

##### `egressOnlyInternetGatewayExclusion`<sup>Optional</sup> <a name="egressOnlyInternetGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.egressOnlyInternetGatewayExclusion"></a>

```typescript
public readonly egressOnlyInternetGatewayExclusion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#egress_only_internet_gateway_exclusion Ec2Vpc#egress_only_internet_gateway_exclusion}.

---

##### `elasticFileSystemExclusion`<sup>Optional</sup> <a name="elasticFileSystemExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.elasticFileSystemExclusion"></a>

```typescript
public readonly elasticFileSystemExclusion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#elastic_file_system_exclusion Ec2Vpc#elastic_file_system_exclusion}.

---

##### `internetGatewayExclusion`<sup>Optional</sup> <a name="internetGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.internetGatewayExclusion"></a>

```typescript
public readonly internetGatewayExclusion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#internet_gateway_exclusion Ec2Vpc#internet_gateway_exclusion}.

---

##### `lambdaExclusion`<sup>Optional</sup> <a name="lambdaExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.lambdaExclusion"></a>

```typescript
public readonly lambdaExclusion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#lambda_exclusion Ec2Vpc#lambda_exclusion}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The encryption mode for the VPC Encryption Control configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#mode Ec2Vpc#mode}

---

##### `natGatewayExclusion`<sup>Optional</sup> <a name="natGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.natGatewayExclusion"></a>

```typescript
public readonly natGatewayExclusion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#nat_gateway_exclusion Ec2Vpc#nat_gateway_exclusion}.

---

##### `virtualPrivateGatewayExclusion`<sup>Optional</sup> <a name="virtualPrivateGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.virtualPrivateGatewayExclusion"></a>

```typescript
public readonly virtualPrivateGatewayExclusion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#virtual_private_gateway_exclusion Ec2Vpc#virtual_private_gateway_exclusion}.

---

##### `vpcLatticeExclusion`<sup>Optional</sup> <a name="vpcLatticeExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.vpcLatticeExclusion"></a>

```typescript
public readonly vpcLatticeExclusion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#vpc_lattice_exclusion Ec2Vpc#vpc_lattice_exclusion}.

---

##### `vpcPeeringExclusion`<sup>Optional</sup> <a name="vpcPeeringExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl.property.vpcPeeringExclusion"></a>

```typescript
public readonly vpcPeeringExclusion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc#vpc_peering_exclusion Ec2Vpc#vpc_peering_exclusion}.

---

### Ec2VpcVpcEncryptionControlResourceExclusions <a name="Ec2VpcVpcEncryptionControlResourceExclusions" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusions.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcVpcEncryptionControlResourceExclusions: ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusions = { ... }
```


### Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway <a name="Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway: ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway = { ... }
```


### Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem <a name="Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem: ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem = { ... }
```


### Ec2VpcVpcEncryptionControlResourceExclusionsInternetGateway <a name="Ec2VpcVpcEncryptionControlResourceExclusionsInternetGateway" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGateway.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcVpcEncryptionControlResourceExclusionsInternetGateway: ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGateway = { ... }
```


### Ec2VpcVpcEncryptionControlResourceExclusionsLambda <a name="Ec2VpcVpcEncryptionControlResourceExclusionsLambda" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambda.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcVpcEncryptionControlResourceExclusionsLambda: ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambda = { ... }
```


### Ec2VpcVpcEncryptionControlResourceExclusionsNatGateway <a name="Ec2VpcVpcEncryptionControlResourceExclusionsNatGateway" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGateway.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcVpcEncryptionControlResourceExclusionsNatGateway: ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGateway = { ... }
```


### Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway <a name="Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway: ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway = { ... }
```


### Ec2VpcVpcEncryptionControlResourceExclusionsVpcLattice <a name="Ec2VpcVpcEncryptionControlResourceExclusionsVpcLattice" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLattice.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcVpcEncryptionControlResourceExclusionsVpcLattice: ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLattice = { ... }
```


### Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeering <a name="Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeering" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeering.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

const ec2VpcVpcEncryptionControlResourceExclusionsVpcPeering: ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeering = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcTagsList <a name="Ec2VpcTagsList" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.get"></a>

```typescript
public get(index: number): Ec2VpcTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags">Ec2VpcTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpcTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags">Ec2VpcTags</a>[]

---


### Ec2VpcTagsOutputReference <a name="Ec2VpcTagsOutputReference" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags">Ec2VpcTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpcTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcTags">Ec2VpcTags</a>

---


### Ec2VpcVpcEncryptionControlOutputReference <a name="Ec2VpcVpcEncryptionControlOutputReference" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetEgressOnlyInternetGatewayExclusion">resetEgressOnlyInternetGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetElasticFileSystemExclusion">resetElasticFileSystemExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetInternetGatewayExclusion">resetInternetGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetLambdaExclusion">resetLambdaExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetNatGatewayExclusion">resetNatGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetVirtualPrivateGatewayExclusion">resetVirtualPrivateGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetVpcLatticeExclusion">resetVpcLatticeExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetVpcPeeringExclusion">resetVpcPeeringExclusion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEgressOnlyInternetGatewayExclusion` <a name="resetEgressOnlyInternetGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetEgressOnlyInternetGatewayExclusion"></a>

```typescript
public resetEgressOnlyInternetGatewayExclusion(): void
```

##### `resetElasticFileSystemExclusion` <a name="resetElasticFileSystemExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetElasticFileSystemExclusion"></a>

```typescript
public resetElasticFileSystemExclusion(): void
```

##### `resetInternetGatewayExclusion` <a name="resetInternetGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetInternetGatewayExclusion"></a>

```typescript
public resetInternetGatewayExclusion(): void
```

##### `resetLambdaExclusion` <a name="resetLambdaExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetLambdaExclusion"></a>

```typescript
public resetLambdaExclusion(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetNatGatewayExclusion` <a name="resetNatGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetNatGatewayExclusion"></a>

```typescript
public resetNatGatewayExclusion(): void
```

##### `resetVirtualPrivateGatewayExclusion` <a name="resetVirtualPrivateGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetVirtualPrivateGatewayExclusion"></a>

```typescript
public resetVirtualPrivateGatewayExclusion(): void
```

##### `resetVpcLatticeExclusion` <a name="resetVpcLatticeExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetVpcLatticeExclusion"></a>

```typescript
public resetVpcLatticeExclusion(): void
```

##### `resetVpcPeeringExclusion` <a name="resetVpcPeeringExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.resetVpcPeeringExclusion"></a>

```typescript
public resetVpcPeeringExclusion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.resourceExclusions">resourceExclusions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcEncryptionControlId">vpcEncryptionControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.egressOnlyInternetGatewayExclusionInput">egressOnlyInternetGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.elasticFileSystemExclusionInput">elasticFileSystemExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.internetGatewayExclusionInput">internetGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.lambdaExclusionInput">lambdaExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.natGatewayExclusionInput">natGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.virtualPrivateGatewayExclusionInput">virtualPrivateGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcLatticeExclusionInput">vpcLatticeExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcPeeringExclusionInput">vpcPeeringExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.egressOnlyInternetGatewayExclusion">egressOnlyInternetGatewayExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.elasticFileSystemExclusion">elasticFileSystemExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.internetGatewayExclusion">internetGatewayExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.lambdaExclusion">lambdaExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.natGatewayExclusion">natGatewayExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.virtualPrivateGatewayExclusion">virtualPrivateGatewayExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcLatticeExclusion">vpcLatticeExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcPeeringExclusion">vpcPeeringExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl">Ec2VpcVpcEncryptionControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceExclusions`<sup>Required</sup> <a name="resourceExclusions" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.resourceExclusions"></a>

```typescript
public readonly resourceExclusions: Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `vpcEncryptionControlId`<sup>Required</sup> <a name="vpcEncryptionControlId" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcEncryptionControlId"></a>

```typescript
public readonly vpcEncryptionControlId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `egressOnlyInternetGatewayExclusionInput`<sup>Optional</sup> <a name="egressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.egressOnlyInternetGatewayExclusionInput"></a>

```typescript
public readonly egressOnlyInternetGatewayExclusionInput: string;
```

- *Type:* string

---

##### `elasticFileSystemExclusionInput`<sup>Optional</sup> <a name="elasticFileSystemExclusionInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.elasticFileSystemExclusionInput"></a>

```typescript
public readonly elasticFileSystemExclusionInput: string;
```

- *Type:* string

---

##### `internetGatewayExclusionInput`<sup>Optional</sup> <a name="internetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.internetGatewayExclusionInput"></a>

```typescript
public readonly internetGatewayExclusionInput: string;
```

- *Type:* string

---

##### `lambdaExclusionInput`<sup>Optional</sup> <a name="lambdaExclusionInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.lambdaExclusionInput"></a>

```typescript
public readonly lambdaExclusionInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `natGatewayExclusionInput`<sup>Optional</sup> <a name="natGatewayExclusionInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.natGatewayExclusionInput"></a>

```typescript
public readonly natGatewayExclusionInput: string;
```

- *Type:* string

---

##### `virtualPrivateGatewayExclusionInput`<sup>Optional</sup> <a name="virtualPrivateGatewayExclusionInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.virtualPrivateGatewayExclusionInput"></a>

```typescript
public readonly virtualPrivateGatewayExclusionInput: string;
```

- *Type:* string

---

##### `vpcLatticeExclusionInput`<sup>Optional</sup> <a name="vpcLatticeExclusionInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcLatticeExclusionInput"></a>

```typescript
public readonly vpcLatticeExclusionInput: string;
```

- *Type:* string

---

##### `vpcPeeringExclusionInput`<sup>Optional</sup> <a name="vpcPeeringExclusionInput" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcPeeringExclusionInput"></a>

```typescript
public readonly vpcPeeringExclusionInput: string;
```

- *Type:* string

---

##### `egressOnlyInternetGatewayExclusion`<sup>Required</sup> <a name="egressOnlyInternetGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.egressOnlyInternetGatewayExclusion"></a>

```typescript
public readonly egressOnlyInternetGatewayExclusion: string;
```

- *Type:* string

---

##### `elasticFileSystemExclusion`<sup>Required</sup> <a name="elasticFileSystemExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.elasticFileSystemExclusion"></a>

```typescript
public readonly elasticFileSystemExclusion: string;
```

- *Type:* string

---

##### `internetGatewayExclusion`<sup>Required</sup> <a name="internetGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.internetGatewayExclusion"></a>

```typescript
public readonly internetGatewayExclusion: string;
```

- *Type:* string

---

##### `lambdaExclusion`<sup>Required</sup> <a name="lambdaExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.lambdaExclusion"></a>

```typescript
public readonly lambdaExclusion: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `natGatewayExclusion`<sup>Required</sup> <a name="natGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.natGatewayExclusion"></a>

```typescript
public readonly natGatewayExclusion: string;
```

- *Type:* string

---

##### `virtualPrivateGatewayExclusion`<sup>Required</sup> <a name="virtualPrivateGatewayExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.virtualPrivateGatewayExclusion"></a>

```typescript
public readonly virtualPrivateGatewayExclusion: string;
```

- *Type:* string

---

##### `vpcLatticeExclusion`<sup>Required</sup> <a name="vpcLatticeExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcLatticeExclusion"></a>

```typescript
public readonly vpcLatticeExclusion: string;
```

- *Type:* string

---

##### `vpcPeeringExclusion`<sup>Required</sup> <a name="vpcPeeringExclusion" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.vpcPeeringExclusion"></a>

```typescript
public readonly vpcPeeringExclusion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpcVpcEncryptionControl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControl">Ec2VpcVpcEncryptionControl</a>

---


### Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference <a name="Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a>

---


### Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference <a name="Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem">Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem">Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystem</a>

---


### Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference <a name="Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGateway">Ec2VpcVpcEncryptionControlResourceExclusionsInternetGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcVpcEncryptionControlResourceExclusionsInternetGateway;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGateway">Ec2VpcVpcEncryptionControlResourceExclusionsInternetGateway</a>

---


### Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference <a name="Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambda">Ec2VpcVpcEncryptionControlResourceExclusionsLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcVpcEncryptionControlResourceExclusionsLambda;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambda">Ec2VpcVpcEncryptionControlResourceExclusionsLambda</a>

---


### Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference <a name="Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGateway">Ec2VpcVpcEncryptionControlResourceExclusionsNatGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcVpcEncryptionControlResourceExclusionsNatGateway;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGateway">Ec2VpcVpcEncryptionControlResourceExclusionsNatGateway</a>

---


### Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference <a name="Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway">egressOnlyInternetGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem">elasticFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway">internetGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.natGateway">natGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway">virtualPrivateGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice">vpcLattice</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering">vpcPeering</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusions">Ec2VpcVpcEncryptionControlResourceExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `egressOnlyInternetGateway`<sup>Required</sup> <a name="egressOnlyInternetGateway" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway"></a>

```typescript
public readonly egressOnlyInternetGateway: Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a>

---

##### `elasticFileSystem`<sup>Required</sup> <a name="elasticFileSystem" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem"></a>

```typescript
public readonly elasticFileSystem: Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a>

---

##### `internetGateway`<sup>Required</sup> <a name="internetGateway" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway"></a>

```typescript
public readonly internetGateway: Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.lambda"></a>

```typescript
public readonly lambda: Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsLambdaOutputReference</a>

---

##### `natGateway`<sup>Required</sup> <a name="natGateway" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.natGateway"></a>

```typescript
public readonly natGateway: Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a>

---

##### `virtualPrivateGateway`<sup>Required</sup> <a name="virtualPrivateGateway" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway"></a>

```typescript
public readonly virtualPrivateGateway: Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a>

---

##### `vpcLattice`<sup>Required</sup> <a name="vpcLattice" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice"></a>

```typescript
public readonly vpcLattice: Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a>

---

##### `vpcPeering`<sup>Required</sup> <a name="vpcPeering" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering"></a>

```typescript
public readonly vpcPeering: Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcVpcEncryptionControlResourceExclusions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusions">Ec2VpcVpcEncryptionControlResourceExclusions</a>

---


### Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference <a name="Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway">Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway">Ec2VpcVpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a>

---


### Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference <a name="Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLattice">Ec2VpcVpcEncryptionControlResourceExclusionsVpcLattice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcVpcEncryptionControlResourceExclusionsVpcLattice;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcLattice">Ec2VpcVpcEncryptionControlResourceExclusionsVpcLattice</a>

---


### Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference <a name="Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer"></a>

```typescript
import { ec2Vpc } from '@cdktn/provider-awscc'

new ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeering">Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeering;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Vpc.Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeering">Ec2VpcVpcEncryptionControlResourceExclusionsVpcPeering</a>

---



