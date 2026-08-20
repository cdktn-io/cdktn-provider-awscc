# `ec2DhcpOptions` Submodule <a name="`ec2DhcpOptions` Submodule" id="@cdktn/provider-awscc.ec2DhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2DhcpOptions <a name="Ec2DhcpOptions" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options awscc_ec2_dhcp_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer"></a>

```typescript
import { ec2DhcpOptions } from '@cdktn/provider-awscc'

new ec2DhcpOptions.Ec2DhcpOptions(scope: Construct, id: string, config?: Ec2DhcpOptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig">Ec2DhcpOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig">Ec2DhcpOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainNameServers">resetDomainNameServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetIpv6AddressPreferredLeaseTime">resetIpv6AddressPreferredLeaseTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNameServers">resetNetbiosNameServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNodeType">resetNetbiosNodeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNtpServers">resetNtpServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2DhcpOptionsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>[]

---

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetDomainNameServers` <a name="resetDomainNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainNameServers"></a>

```typescript
public resetDomainNameServers(): void
```

##### `resetIpv6AddressPreferredLeaseTime` <a name="resetIpv6AddressPreferredLeaseTime" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetIpv6AddressPreferredLeaseTime"></a>

```typescript
public resetIpv6AddressPreferredLeaseTime(): void
```

##### `resetNetbiosNameServers` <a name="resetNetbiosNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNameServers"></a>

```typescript
public resetNetbiosNameServers(): void
```

##### `resetNetbiosNodeType` <a name="resetNetbiosNodeType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNodeType"></a>

```typescript
public resetNetbiosNodeType(): void
```

##### `resetNtpServers` <a name="resetNtpServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNtpServers"></a>

```typescript
public resetNtpServers(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2DhcpOptions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isConstruct"></a>

```typescript
import { ec2DhcpOptions } from '@cdktn/provider-awscc'

ec2DhcpOptions.Ec2DhcpOptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformElement"></a>

```typescript
import { ec2DhcpOptions } from '@cdktn/provider-awscc'

ec2DhcpOptions.Ec2DhcpOptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformResource"></a>

```typescript
import { ec2DhcpOptions } from '@cdktn/provider-awscc'

ec2DhcpOptions.Ec2DhcpOptions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport"></a>

```typescript
import { ec2DhcpOptions } from '@cdktn/provider-awscc'

ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2DhcpOptions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2DhcpOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2DhcpOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2DhcpOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dhcpOptionsId">dhcpOptionsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList">Ec2DhcpOptionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServersInput">domainNameServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTimeInput">ipv6AddressPreferredLeaseTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServersInput">netbiosNameServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeTypeInput">netbiosNodeTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServersInput">ntpServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServers">domainNameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTime">ipv6AddressPreferredLeaseTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServers">netbiosNameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeType">netbiosNodeType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServers">ntpServers</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dhcpOptionsId`<sup>Required</sup> <a name="dhcpOptionsId" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dhcpOptionsId"></a>

```typescript
public readonly dhcpOptionsId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tags"></a>

```typescript
public readonly tags: Ec2DhcpOptionsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList">Ec2DhcpOptionsTagsList</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `domainNameServersInput`<sup>Optional</sup> <a name="domainNameServersInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServersInput"></a>

```typescript
public readonly domainNameServersInput: string[];
```

- *Type:* string[]

---

##### `ipv6AddressPreferredLeaseTimeInput`<sup>Optional</sup> <a name="ipv6AddressPreferredLeaseTimeInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTimeInput"></a>

```typescript
public readonly ipv6AddressPreferredLeaseTimeInput: number;
```

- *Type:* number

---

##### `netbiosNameServersInput`<sup>Optional</sup> <a name="netbiosNameServersInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServersInput"></a>

```typescript
public readonly netbiosNameServersInput: string[];
```

- *Type:* string[]

---

##### `netbiosNodeTypeInput`<sup>Optional</sup> <a name="netbiosNodeTypeInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeTypeInput"></a>

```typescript
public readonly netbiosNodeTypeInput: number;
```

- *Type:* number

---

##### `ntpServersInput`<sup>Optional</sup> <a name="ntpServersInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServersInput"></a>

```typescript
public readonly ntpServersInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2DhcpOptionsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainNameServers`<sup>Required</sup> <a name="domainNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServers"></a>

```typescript
public readonly domainNameServers: string[];
```

- *Type:* string[]

---

##### `ipv6AddressPreferredLeaseTime`<sup>Required</sup> <a name="ipv6AddressPreferredLeaseTime" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTime"></a>

```typescript
public readonly ipv6AddressPreferredLeaseTime: number;
```

- *Type:* number

---

##### `netbiosNameServers`<sup>Required</sup> <a name="netbiosNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServers"></a>

```typescript
public readonly netbiosNameServers: string[];
```

- *Type:* string[]

---

##### `netbiosNodeType`<sup>Required</sup> <a name="netbiosNodeType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeType"></a>

```typescript
public readonly netbiosNodeType: number;
```

- *Type:* number

---

##### `ntpServers`<sup>Required</sup> <a name="ntpServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServers"></a>

```typescript
public readonly ntpServers: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2DhcpOptionsConfig <a name="Ec2DhcpOptionsConfig" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.Initializer"></a>

```typescript
import { ec2DhcpOptions } from '@cdktn/provider-awscc'

const ec2DhcpOptionsConfig: ec2DhcpOptions.Ec2DhcpOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainName">domainName</a></code> | <code>string</code> | This value is used to complete unqualified DNS hostnames. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainNameServers">domainNameServers</a></code> | <code>string[]</code> | The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ipv6AddressPreferredLeaseTime">ipv6AddressPreferredLeaseTime</a></code> | <code>number</code> | The preferred Lease Time for ipV6 address in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNameServers">netbiosNameServers</a></code> | <code>string[]</code> | The IPv4 addresses of up to four NetBIOS name servers. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNodeType">netbiosNodeType</a></code> | <code>number</code> | The NetBIOS node type (1, 2, 4, or 8). |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ntpServers">ntpServers</a></code> | <code>string[]</code> | The IPv4 addresses of up to four Network Time Protocol (NTP) servers. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>[]</code> | Any tags assigned to the DHCP options set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

This value is used to complete unqualified DNS hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#domain_name Ec2DhcpOptions#domain_name}

---

##### `domainNameServers`<sup>Optional</sup> <a name="domainNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainNameServers"></a>

```typescript
public readonly domainNameServers: string[];
```

- *Type:* string[]

The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#domain_name_servers Ec2DhcpOptions#domain_name_servers}

---

##### `ipv6AddressPreferredLeaseTime`<sup>Optional</sup> <a name="ipv6AddressPreferredLeaseTime" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ipv6AddressPreferredLeaseTime"></a>

```typescript
public readonly ipv6AddressPreferredLeaseTime: number;
```

- *Type:* number

The preferred Lease Time for ipV6 address in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#ipv_6_address_preferred_lease_time Ec2DhcpOptions#ipv_6_address_preferred_lease_time}

---

##### `netbiosNameServers`<sup>Optional</sup> <a name="netbiosNameServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNameServers"></a>

```typescript
public readonly netbiosNameServers: string[];
```

- *Type:* string[]

The IPv4 addresses of up to four NetBIOS name servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#netbios_name_servers Ec2DhcpOptions#netbios_name_servers}

---

##### `netbiosNodeType`<sup>Optional</sup> <a name="netbiosNodeType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNodeType"></a>

```typescript
public readonly netbiosNodeType: number;
```

- *Type:* number

The NetBIOS node type (1, 2, 4, or 8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#netbios_node_type Ec2DhcpOptions#netbios_node_type}

---

##### `ntpServers`<sup>Optional</sup> <a name="ntpServers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ntpServers"></a>

```typescript
public readonly ntpServers: string[];
```

- *Type:* string[]

The IPv4 addresses of up to four Network Time Protocol (NTP) servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#ntp_servers Ec2DhcpOptions#ntp_servers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2DhcpOptionsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>[]

Any tags assigned to the DHCP options set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#tags Ec2DhcpOptions#tags}

---

### Ec2DhcpOptionsTags <a name="Ec2DhcpOptionsTags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.Initializer"></a>

```typescript
import { ec2DhcpOptions } from '@cdktn/provider-awscc'

const ec2DhcpOptionsTags: ec2DhcpOptions.Ec2DhcpOptionsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#key Ec2DhcpOptions#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#value Ec2DhcpOptions#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#key Ec2DhcpOptions#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_dhcp_options#value Ec2DhcpOptions#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2DhcpOptionsTagsList <a name="Ec2DhcpOptionsTagsList" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer"></a>

```typescript
import { ec2DhcpOptions } from '@cdktn/provider-awscc'

new ec2DhcpOptions.Ec2DhcpOptionsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.get"></a>

```typescript
public get(index: number): Ec2DhcpOptionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2DhcpOptionsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>[]

---


### Ec2DhcpOptionsTagsOutputReference <a name="Ec2DhcpOptionsTagsOutputReference" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer"></a>

```typescript
import { ec2DhcpOptions } from '@cdktn/provider-awscc'

new ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2DhcpOptionsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>

---



