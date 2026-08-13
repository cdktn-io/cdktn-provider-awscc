# `ec2SecurityGroupIngress` Submodule <a name="`ec2SecurityGroupIngress` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroupIngress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroupIngress <a name="Ec2SecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress awscc_ec2_security_group_ingress}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer"></a>

```typescript
import { ec2SecurityGroupIngress } from '@cdktn/provider-awscc'

new ec2SecurityGroupIngress.Ec2SecurityGroupIngress(scope: Construct, id: string, config: Ec2SecurityGroupIngressConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig">Ec2SecurityGroupIngressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig">Ec2SecurityGroupIngressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIp">resetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourcePrefixListId">resetSourcePrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupId">resetSourceSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupName">resetSourceSecurityGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupOwnerId">resetSourceSecurityGroupOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCidrIp` <a name="resetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIp"></a>

```typescript
public resetCidrIp(): void
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIpv6"></a>

```typescript
public resetCidrIpv6(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetFromPort"></a>

```typescript
public resetFromPort(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetGroupName` <a name="resetGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupName"></a>

```typescript
public resetGroupName(): void
```

##### `resetSourcePrefixListId` <a name="resetSourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourcePrefixListId"></a>

```typescript
public resetSourcePrefixListId(): void
```

##### `resetSourceSecurityGroupId` <a name="resetSourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupId"></a>

```typescript
public resetSourceSecurityGroupId(): void
```

##### `resetSourceSecurityGroupName` <a name="resetSourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupName"></a>

```typescript
public resetSourceSecurityGroupName(): void
```

##### `resetSourceSecurityGroupOwnerId` <a name="resetSourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupOwnerId"></a>

```typescript
public resetSourceSecurityGroupOwnerId(): void
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetToPort"></a>

```typescript
public resetToPort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SecurityGroupIngress resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct"></a>

```typescript
import { ec2SecurityGroupIngress } from '@cdktn/provider-awscc'

ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement"></a>

```typescript
import { ec2SecurityGroupIngress } from '@cdktn/provider-awscc'

ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource"></a>

```typescript
import { ec2SecurityGroupIngress } from '@cdktn/provider-awscc'

ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport"></a>

```typescript
import { ec2SecurityGroupIngress } from '@cdktn/provider-awscc'

ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2SecurityGroupIngress resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2SecurityGroupIngress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2SecurityGroupIngress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroupIngress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.securityGroupIngressId">securityGroupIngressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpInput">cidrIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListIdInput">sourcePrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupIdInput">sourceSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupNameInput">sourceSecurityGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerIdInput">sourceSecurityGroupOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIp">cidrIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListId">sourcePrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupName">sourceSecurityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerId">sourceSecurityGroupOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityGroupIngressId`<sup>Required</sup> <a name="securityGroupIngressId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.securityGroupIngressId"></a>

```typescript
public readonly securityGroupIngressId: string;
```

- *Type:* string

---

##### `cidrIpInput`<sup>Optional</sup> <a name="cidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpInput"></a>

```typescript
public readonly cidrIpInput: string;
```

- *Type:* string

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6Input"></a>

```typescript
public readonly cidrIpv6Input: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `sourcePrefixListIdInput`<sup>Optional</sup> <a name="sourcePrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListIdInput"></a>

```typescript
public readonly sourcePrefixListIdInput: string;
```

- *Type:* string

---

##### `sourceSecurityGroupIdInput`<sup>Optional</sup> <a name="sourceSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupIdInput"></a>

```typescript
public readonly sourceSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `sourceSecurityGroupNameInput`<sup>Optional</sup> <a name="sourceSecurityGroupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupNameInput"></a>

```typescript
public readonly sourceSecurityGroupNameInput: string;
```

- *Type:* string

---

##### `sourceSecurityGroupOwnerIdInput`<sup>Optional</sup> <a name="sourceSecurityGroupOwnerIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerIdInput"></a>

```typescript
public readonly sourceSecurityGroupOwnerIdInput: string;
```

- *Type:* string

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `cidrIp`<sup>Required</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIp"></a>

```typescript
public readonly cidrIp: string;
```

- *Type:* string

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `sourcePrefixListId`<sup>Required</sup> <a name="sourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListId"></a>

```typescript
public readonly sourcePrefixListId: string;
```

- *Type:* string

---

##### `sourceSecurityGroupId`<sup>Required</sup> <a name="sourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupId"></a>

```typescript
public readonly sourceSecurityGroupId: string;
```

- *Type:* string

---

##### `sourceSecurityGroupName`<sup>Required</sup> <a name="sourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupName"></a>

```typescript
public readonly sourceSecurityGroupName: string;
```

- *Type:* string

---

##### `sourceSecurityGroupOwnerId`<sup>Required</sup> <a name="sourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerId"></a>

```typescript
public readonly sourceSecurityGroupOwnerId: string;
```

- *Type:* string

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupIngressConfig <a name="Ec2SecurityGroupIngressConfig" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.Initializer"></a>

```typescript
import { ec2SecurityGroupIngress } from '@cdktn/provider-awscc'

const ec2SecurityGroupIngressConfig: ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers). |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIp">cidrIp</a></code> | <code>string</code> | The IPv4 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | [VPC only] The IPv6 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.description">description</a></code> | <code>string</code> | Updates the description of an ingress (inbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.fromPort">fromPort</a></code> | <code>number</code> | The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupId">groupId</a></code> | <code>string</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupName">groupName</a></code> | <code>string</code> | The name of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourcePrefixListId">sourcePrefixListId</a></code> | <code>string</code> | [EC2-VPC only] The ID of a prefix list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>string</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupName">sourceSecurityGroupName</a></code> | <code>string</code> | [EC2-Classic, default VPC] The name of the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupOwnerId">sourceSecurityGroupOwnerId</a></code> | <code>string</code> | [nondefault VPC] The AWS account ID that owns the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.toPort">toPort</a></code> | <code>number</code> | The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers).

[VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#ip_protocol Ec2SecurityGroupIngress#ip_protocol}

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIp"></a>

```typescript
public readonly cidrIp: string;
```

- *Type:* string

The IPv4 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#cidr_ip Ec2SecurityGroupIngress#cidr_ip}

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

[VPC only] The IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#cidr_ipv_6 Ec2SecurityGroupIngress#cidr_ipv_6}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Updates the description of an ingress (inbound) security group rule.

You can replace an existing description, or add a description to a rule that did not have one previously

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#description Ec2SecurityGroupIngress#description}

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number.

A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#from_port Ec2SecurityGroupIngress#from_port}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#group_id Ec2SecurityGroupIngress#group_id}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The name of the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#group_name Ec2SecurityGroupIngress#group_name}

---

##### `sourcePrefixListId`<sup>Optional</sup> <a name="sourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourcePrefixListId"></a>

```typescript
public readonly sourcePrefixListId: string;
```

- *Type:* string

[EC2-VPC only] The ID of a prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#source_prefix_list_id Ec2SecurityGroupIngress#source_prefix_list_id}

---

##### `sourceSecurityGroupId`<sup>Optional</sup> <a name="sourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupId"></a>

```typescript
public readonly sourceSecurityGroupId: string;
```

- *Type:* string

The ID of the security group.

You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#source_security_group_id Ec2SecurityGroupIngress#source_security_group_id}

---

##### `sourceSecurityGroupName`<sup>Optional</sup> <a name="sourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupName"></a>

```typescript
public readonly sourceSecurityGroupName: string;
```

- *Type:* string

[EC2-Classic, default VPC] The name of the source security group.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#source_security_group_name Ec2SecurityGroupIngress#source_security_group_name}

---

##### `sourceSecurityGroupOwnerId`<sup>Optional</sup> <a name="sourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupOwnerId"></a>

```typescript
public readonly sourceSecurityGroupOwnerId: string;
```

- *Type:* string

[nondefault VPC] The AWS account ID that owns the source security group.

You can't specify this property with an IP address range.

If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#source_security_group_owner_id Ec2SecurityGroupIngress#source_security_group_owner_id}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.

A value of -1 indicates all ICMP/ICMPv6 codes for the specified ICMP type. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group_ingress#to_port Ec2SecurityGroupIngress#to_port}

---



