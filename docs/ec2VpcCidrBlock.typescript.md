# `ec2VpcCidrBlock` Submodule <a name="`ec2VpcCidrBlock` Submodule" id="@cdktn/provider-awscc.ec2VpcCidrBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcCidrBlock <a name="Ec2VpcCidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block awscc_ec2_vpc_cidr_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer"></a>

```typescript
import { ec2VpcCidrBlock } from '@cdktn/provider-awscc'

new ec2VpcCidrBlock.Ec2VpcCidrBlock(scope: Construct, id: string, config: Ec2VpcCidrBlockConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig">Ec2VpcCidrBlockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig">Ec2VpcCidrBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetAmazonProvidedIpv6CidrBlock">resetAmazonProvidedIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4IpamPoolId">resetIpv4IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4NetmaskLength">resetIpv4NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlockNetworkBorderGroup">resetIpv6CidrBlockNetworkBorderGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6IpamPoolId">resetIpv6IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6NetmaskLength">resetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6Pool">resetIpv6Pool</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAmazonProvidedIpv6CidrBlock` <a name="resetAmazonProvidedIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetAmazonProvidedIpv6CidrBlock"></a>

```typescript
public resetAmazonProvidedIpv6CidrBlock(): void
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetIpv4IpamPoolId` <a name="resetIpv4IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4IpamPoolId"></a>

```typescript
public resetIpv4IpamPoolId(): void
```

##### `resetIpv4NetmaskLength` <a name="resetIpv4NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4NetmaskLength"></a>

```typescript
public resetIpv4NetmaskLength(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetIpv6CidrBlockNetworkBorderGroup` <a name="resetIpv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlockNetworkBorderGroup"></a>

```typescript
public resetIpv6CidrBlockNetworkBorderGroup(): void
```

##### `resetIpv6IpamPoolId` <a name="resetIpv6IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6IpamPoolId"></a>

```typescript
public resetIpv6IpamPoolId(): void
```

##### `resetIpv6NetmaskLength` <a name="resetIpv6NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6NetmaskLength"></a>

```typescript
public resetIpv6NetmaskLength(): void
```

##### `resetIpv6Pool` <a name="resetIpv6Pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6Pool"></a>

```typescript
public resetIpv6Pool(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcCidrBlock resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct"></a>

```typescript
import { ec2VpcCidrBlock } from '@cdktn/provider-awscc'

ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement"></a>

```typescript
import { ec2VpcCidrBlock } from '@cdktn/provider-awscc'

ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource"></a>

```typescript
import { ec2VpcCidrBlock } from '@cdktn/provider-awscc'

ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport"></a>

```typescript
import { ec2VpcCidrBlock } from '@cdktn/provider-awscc'

ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VpcCidrBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpcCidrBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpcCidrBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcCidrBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipSource">ipSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6AddressAttribute">ipv6AddressAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcCidrBlockId">vpcCidrBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlockInput">amazonProvidedIpv6CidrBlockInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolIdInput">ipv4IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLengthInput">ipv4NetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroupInput">ipv6CidrBlockNetworkBorderGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolIdInput">ipv6IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLengthInput">ipv6NetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6PoolInput">ipv6PoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlock">amazonProvidedIpv6CidrBlock</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6Pool">ipv6Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipSource`<sup>Required</sup> <a name="ipSource" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipSource"></a>

```typescript
public readonly ipSource: string;
```

- *Type:* string

---

##### `ipv6AddressAttribute`<sup>Required</sup> <a name="ipv6AddressAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6AddressAttribute"></a>

```typescript
public readonly ipv6AddressAttribute: string;
```

- *Type:* string

---

##### `vpcCidrBlockId`<sup>Required</sup> <a name="vpcCidrBlockId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcCidrBlockId"></a>

```typescript
public readonly vpcCidrBlockId: string;
```

- *Type:* string

---

##### `amazonProvidedIpv6CidrBlockInput`<sup>Optional</sup> <a name="amazonProvidedIpv6CidrBlockInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlockInput"></a>

```typescript
public readonly amazonProvidedIpv6CidrBlockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="ipv4IpamPoolIdInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolIdInput"></a>

```typescript
public readonly ipv4IpamPoolIdInput: string;
```

- *Type:* string

---

##### `ipv4NetmaskLengthInput`<sup>Optional</sup> <a name="ipv4NetmaskLengthInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLengthInput"></a>

```typescript
public readonly ipv4NetmaskLengthInput: number;
```

- *Type:* number

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlockNetworkBorderGroupInput`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroupInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```typescript
public readonly ipv6CidrBlockNetworkBorderGroupInput: string;
```

- *Type:* string

---

##### `ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="ipv6IpamPoolIdInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolIdInput"></a>

```typescript
public readonly ipv6IpamPoolIdInput: string;
```

- *Type:* string

---

##### `ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="ipv6NetmaskLengthInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLengthInput"></a>

```typescript
public readonly ipv6NetmaskLengthInput: number;
```

- *Type:* number

---

##### `ipv6PoolInput`<sup>Optional</sup> <a name="ipv6PoolInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6PoolInput"></a>

```typescript
public readonly ipv6PoolInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `amazonProvidedIpv6CidrBlock`<sup>Required</sup> <a name="amazonProvidedIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlock"></a>

```typescript
public readonly amazonProvidedIpv6CidrBlock: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `ipv4IpamPoolId`<sup>Required</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolId"></a>

```typescript
public readonly ipv4IpamPoolId: string;
```

- *Type:* string

---

##### `ipv4NetmaskLength`<sup>Required</sup> <a name="ipv4NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLength"></a>

```typescript
public readonly ipv4NetmaskLength: number;
```

- *Type:* number

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Required</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroup"></a>

```typescript
public readonly ipv6CidrBlockNetworkBorderGroup: string;
```

- *Type:* string

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolId"></a>

```typescript
public readonly ipv6IpamPoolId: string;
```

- *Type:* string

---

##### `ipv6NetmaskLength`<sup>Required</sup> <a name="ipv6NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLength"></a>

```typescript
public readonly ipv6NetmaskLength: number;
```

- *Type:* number

---

##### `ipv6Pool`<sup>Required</sup> <a name="ipv6Pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6Pool"></a>

```typescript
public readonly ipv6Pool: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcCidrBlockConfig <a name="Ec2VpcCidrBlockConfig" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.Initializer"></a>

```typescript
import { ec2VpcCidrBlock } from '@cdktn/provider-awscc'

const ec2VpcCidrBlockConfig: ec2VpcCidrBlock.Ec2VpcCidrBlockConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.vpcId">vpcId</a></code> | <code>string</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.amazonProvidedIpv6CidrBlock">amazonProvidedIpv6CidrBlock</a></code> | <code>boolean \| cdktn.IResolvable</code> | Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | An IPv4 CIDR block to associate with the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>string</code> | The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>number</code> | The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | An IPv6 CIDR block from the IPv6 address pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>string</code> | The name of the location from which we advertise the IPV6 CIDR block. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>string</code> | The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>number</code> | The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6Pool">ipv6Pool</a></code> | <code>string</code> | The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block#vpc_id Ec2VpcCidrBlock#vpc_id}

---

##### `amazonProvidedIpv6CidrBlock`<sup>Optional</sup> <a name="amazonProvidedIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.amazonProvidedIpv6CidrBlock"></a>

```typescript
public readonly amazonProvidedIpv6CidrBlock: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.

You cannot specify the range of IPv6 addresses, or the size of the CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block#amazon_provided_ipv_6_cidr_block Ec2VpcCidrBlock#amazon_provided_ipv_6_cidr_block}

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

An IPv4 CIDR block to associate with the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block#cidr_block Ec2VpcCidrBlock#cidr_block}

---

##### `ipv4IpamPoolId`<sup>Optional</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4IpamPoolId"></a>

```typescript
public readonly ipv4IpamPoolId: string;
```

- *Type:* string

The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block#ipv_4_ipam_pool_id Ec2VpcCidrBlock#ipv_4_ipam_pool_id}

---

##### `ipv4NetmaskLength`<sup>Optional</sup> <a name="ipv4NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4NetmaskLength"></a>

```typescript
public readonly ipv4NetmaskLength: number;
```

- *Type:* number

The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block#ipv_4_netmask_length Ec2VpcCidrBlock#ipv_4_netmask_length}

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

An IPv6 CIDR block from the IPv6 address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block Ec2VpcCidrBlock#ipv_6_cidr_block}

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```typescript
public readonly ipv6CidrBlockNetworkBorderGroup: string;
```

- *Type:* string

The name of the location from which we advertise the IPV6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block_network_border_group Ec2VpcCidrBlock#ipv_6_cidr_block_network_border_group}

---

##### `ipv6IpamPoolId`<sup>Optional</sup> <a name="ipv6IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6IpamPoolId"></a>

```typescript
public readonly ipv6IpamPoolId: string;
```

- *Type:* string

The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block#ipv_6_ipam_pool_id Ec2VpcCidrBlock#ipv_6_ipam_pool_id}

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6NetmaskLength"></a>

```typescript
public readonly ipv6NetmaskLength: number;
```

- *Type:* number

The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block#ipv_6_netmask_length Ec2VpcCidrBlock#ipv_6_netmask_length}

---

##### `ipv6Pool`<sup>Optional</sup> <a name="ipv6Pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6Pool"></a>

```typescript
public readonly ipv6Pool: string;
```

- *Type:* string

The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_cidr_block#ipv_6_pool Ec2VpcCidrBlock#ipv_6_pool}

---



