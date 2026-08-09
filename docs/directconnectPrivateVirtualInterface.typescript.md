# `directconnectPrivateVirtualInterface` Submodule <a name="`directconnectPrivateVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectPrivateVirtualInterface <a name="DirectconnectPrivateVirtualInterface" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface awscc_directconnect_private_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

new directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface(scope: Construct, id: string, config: DirectconnectPrivateVirtualInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig">DirectconnectPrivateVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig">DirectconnectPrivateVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers">putBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetAllocatePrivateVirtualInterfaceRoleArn">resetAllocatePrivateVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetDirectConnectGatewayId">resetDirectConnectGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetEnableSiteLink">resetEnableSiteLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetVirtualGatewayId">resetVirtualGatewayId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpPeers` <a name="putBgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers"></a>

```typescript
public putBgpPeers(value: IResolvable | DirectconnectPrivateVirtualInterfaceBgpPeers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags"></a>

```typescript
public putTags(value: IResolvable | DirectconnectPrivateVirtualInterfaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]

---

##### `resetAllocatePrivateVirtualInterfaceRoleArn` <a name="resetAllocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetAllocatePrivateVirtualInterfaceRoleArn"></a>

```typescript
public resetAllocatePrivateVirtualInterfaceRoleArn(): void
```

##### `resetDirectConnectGatewayId` <a name="resetDirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetDirectConnectGatewayId"></a>

```typescript
public resetDirectConnectGatewayId(): void
```

##### `resetEnableSiteLink` <a name="resetEnableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetEnableSiteLink"></a>

```typescript
public resetEnableSiteLink(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVirtualGatewayId` <a name="resetVirtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetVirtualGatewayId"></a>

```typescript
public resetVirtualGatewayId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectconnectPrivateVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectconnectPrivateVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectPrivateVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeers">bgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList">DirectconnectPrivateVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList">DirectconnectPrivateVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceArn">virtualInterfaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArnInput">allocatePrivateVirtualInterfaceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeersInput">bgpPeersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayIdInput">directConnectGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLinkInput">enableSiteLinkInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayIdInput">virtualGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceNameInput">virtualInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn">allocatePrivateVirtualInterfaceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLink">enableSiteLink</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayId">virtualGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeers"></a>

```typescript
public readonly bgpPeers: DirectconnectPrivateVirtualInterfaceBgpPeersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList">DirectconnectPrivateVirtualInterfaceBgpPeersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tags"></a>

```typescript
public readonly tags: DirectconnectPrivateVirtualInterfaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList">DirectconnectPrivateVirtualInterfaceTagsList</a>

---

##### `virtualInterfaceArn`<sup>Required</sup> <a name="virtualInterfaceArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceArn"></a>

```typescript
public readonly virtualInterfaceArn: string;
```

- *Type:* string

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

---

##### `allocatePrivateVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="allocatePrivateVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArnInput"></a>

```typescript
public readonly allocatePrivateVirtualInterfaceRoleArnInput: string;
```

- *Type:* string

---

##### `bgpPeersInput`<sup>Optional</sup> <a name="bgpPeersInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeersInput"></a>

```typescript
public readonly bgpPeersInput: IResolvable | DirectconnectPrivateVirtualInterfaceBgpPeers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `directConnectGatewayIdInput`<sup>Optional</sup> <a name="directConnectGatewayIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayIdInput"></a>

```typescript
public readonly directConnectGatewayIdInput: string;
```

- *Type:* string

---

##### `enableSiteLinkInput`<sup>Optional</sup> <a name="enableSiteLinkInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLinkInput"></a>

```typescript
public readonly enableSiteLinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DirectconnectPrivateVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]

---

##### `virtualGatewayIdInput`<sup>Optional</sup> <a name="virtualGatewayIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayIdInput"></a>

```typescript
public readonly virtualGatewayIdInput: string;
```

- *Type:* string

---

##### `virtualInterfaceNameInput`<sup>Optional</sup> <a name="virtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceNameInput"></a>

```typescript
public readonly virtualInterfaceNameInput: string;
```

- *Type:* string

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `allocatePrivateVirtualInterfaceRoleArn`<sup>Required</sup> <a name="allocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn"></a>

```typescript
public readonly allocatePrivateVirtualInterfaceRoleArn: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayId"></a>

```typescript
public readonly directConnectGatewayId: string;
```

- *Type:* string

---

##### `enableSiteLink`<sup>Required</sup> <a name="enableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLink"></a>

```typescript
public readonly enableSiteLink: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `virtualGatewayId`<sup>Required</sup> <a name="virtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayId"></a>

```typescript
public readonly virtualGatewayId: string;
```

- *Type:* string

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceName"></a>

```typescript
public readonly virtualInterfaceName: string;
```

- *Type:* string

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectPrivateVirtualInterfaceBgpPeers <a name="DirectconnectPrivateVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.Initializer"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

const directconnectPrivateVirtualInterfaceBgpPeers: directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.addressFamily">addressFamily</a></code> | <code>string</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.asn">asn</a></code> | <code>string</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.authKey">authKey</a></code> | <code>string</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.bgpPeerId">bgpPeerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#bgp_peer_id DirectconnectPrivateVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.customerAddress">customerAddress</a></code> | <code>string</code> | The IP address assigned to the customer interface. |

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#address_family DirectconnectPrivateVirtualInterface#address_family}

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.asn"></a>

```typescript
public readonly asn: string;
```

- *Type:* string

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#asn DirectconnectPrivateVirtualInterface#asn}

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#amazon_address DirectconnectPrivateVirtualInterface#amazon_address}

---

##### `authKey`<sup>Optional</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.authKey"></a>

```typescript
public readonly authKey: string;
```

- *Type:* string

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#auth_key DirectconnectPrivateVirtualInterface#auth_key}

---

##### `bgpPeerId`<sup>Optional</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```typescript
public readonly bgpPeerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#bgp_peer_id DirectconnectPrivateVirtualInterface#bgp_peer_id}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#customer_address DirectconnectPrivateVirtualInterface#customer_address}

---

### DirectconnectPrivateVirtualInterfaceConfig <a name="DirectconnectPrivateVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.Initializer"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

const directconnectPrivateVirtualInterfaceConfig: directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.bgpPeers">bgpPeers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]</code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>string</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>string</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>number</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.allocatePrivateVirtualInterfaceRoleArn">allocatePrivateVirtualInterfaceRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to allocate the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>string</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.enableSiteLink">enableSiteLink</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>number</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]</code> | The tags associated with the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualGatewayId">virtualGatewayId</a></code> | <code>string</code> | The ID or ARN of the virtual private gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.bgpPeers"></a>

```typescript
public readonly bgpPeers: IResolvable | DirectconnectPrivateVirtualInterfaceBgpPeers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#bgp_peers DirectconnectPrivateVirtualInterface#bgp_peers}

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#connection_id DirectconnectPrivateVirtualInterface#connection_id}

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```typescript
public readonly virtualInterfaceName: string;
```

- *Type:* string

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#virtual_interface_name DirectconnectPrivateVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#vlan DirectconnectPrivateVirtualInterface#vlan}

---

##### `allocatePrivateVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="allocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.allocatePrivateVirtualInterfaceRoleArn"></a>

```typescript
public readonly allocatePrivateVirtualInterfaceRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to allocate the private virtual interface.

Needs directconnect:AllocatePrivateVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#allocate_private_virtual_interface_role_arn DirectconnectPrivateVirtualInterface#allocate_private_virtual_interface_role_arn}

---

##### `directConnectGatewayId`<sup>Optional</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.directConnectGatewayId"></a>

```typescript
public readonly directConnectGatewayId: string;
```

- *Type:* string

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#direct_connect_gateway_id DirectconnectPrivateVirtualInterface#direct_connect_gateway_id}

---

##### `enableSiteLink`<sup>Optional</sup> <a name="enableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.enableSiteLink"></a>

```typescript
public readonly enableSiteLink: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#enable_site_link DirectconnectPrivateVirtualInterface#enable_site_link}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#mtu DirectconnectPrivateVirtualInterface#mtu}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DirectconnectPrivateVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#tags DirectconnectPrivateVirtualInterface#tags}

---

##### `virtualGatewayId`<sup>Optional</sup> <a name="virtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualGatewayId"></a>

```typescript
public readonly virtualGatewayId: string;
```

- *Type:* string

The ID or ARN of the virtual private gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#virtual_gateway_id DirectconnectPrivateVirtualInterface#virtual_gateway_id}

---

### DirectconnectPrivateVirtualInterfaceTags <a name="DirectconnectPrivateVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.Initializer"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

const directconnectPrivateVirtualInterfaceTags: directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#key DirectconnectPrivateVirtualInterface#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_private_virtual_interface#value DirectconnectPrivateVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectPrivateVirtualInterfaceBgpPeersList <a name="DirectconnectPrivateVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

new directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get"></a>

```typescript
public get(index: number): DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectPrivateVirtualInterfaceBgpPeers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]

---


### DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

new directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAuthKey">resetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">resetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```typescript
public resetAmazonAddress(): void
```

##### `resetAuthKey` <a name="resetAuthKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```typescript
public resetAuthKey(): void
```

##### `resetBgpPeerId` <a name="resetBgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```typescript
public resetBgpPeerId(): void
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```typescript
public resetCustomerAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">amazonAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asnInput">asnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">authKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">bgpPeerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">customerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn">asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey">authKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">bgpPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress">customerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```typescript
public readonly amazonAddressInput: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```typescript
public readonly asnInput: string;
```

- *Type:* string

---

##### `authKeyInput`<sup>Optional</sup> <a name="authKeyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```typescript
public readonly authKeyInput: string;
```

- *Type:* string

---

##### `bgpPeerIdInput`<sup>Optional</sup> <a name="bgpPeerIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```typescript
public readonly bgpPeerIdInput: string;
```

- *Type:* string

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```typescript
public readonly customerAddressInput: string;
```

- *Type:* string

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```typescript
public readonly asn: string;
```

- *Type:* string

---

##### `authKey`<sup>Required</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```typescript
public readonly authKey: string;
```

- *Type:* string

---

##### `bgpPeerId`<sup>Required</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```typescript
public readonly bgpPeerId: string;
```

- *Type:* string

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectPrivateVirtualInterfaceBgpPeers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>

---


### DirectconnectPrivateVirtualInterfaceTagsList <a name="DirectconnectPrivateVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

new directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get"></a>

```typescript
public get(index: number): DirectconnectPrivateVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectPrivateVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]

---


### DirectconnectPrivateVirtualInterfaceTagsOutputReference <a name="DirectconnectPrivateVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer"></a>

```typescript
import { directconnectPrivateVirtualInterface } from '@cdktn/provider-awscc'

new directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectPrivateVirtualInterfaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>

---



