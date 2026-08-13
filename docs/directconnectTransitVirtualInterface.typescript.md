# `directconnectTransitVirtualInterface` Submodule <a name="`directconnectTransitVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectTransitVirtualInterface <a name="DirectconnectTransitVirtualInterface" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface awscc_directconnect_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

new directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface(scope: Construct, id: string, config: DirectconnectTransitVirtualInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig">DirectconnectTransitVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig">DirectconnectTransitVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers">putBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetAllocateTransitVirtualInterfaceRoleArn">resetAllocateTransitVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetEnableSiteLink">resetEnableSiteLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetRateLimit">resetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpPeers` <a name="putBgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers"></a>

```typescript
public putBgpPeers(value: IResolvable | DirectconnectTransitVirtualInterfaceBgpPeers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags"></a>

```typescript
public putTags(value: IResolvable | DirectconnectTransitVirtualInterfaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]

---

##### `resetAllocateTransitVirtualInterfaceRoleArn` <a name="resetAllocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetAllocateTransitVirtualInterfaceRoleArn"></a>

```typescript
public resetAllocateTransitVirtualInterfaceRoleArn(): void
```

##### `resetEnableSiteLink` <a name="resetEnableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetEnableSiteLink"></a>

```typescript
public resetEnableSiteLink(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetRateLimit"></a>

```typescript
public resetRateLimit(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectconnectTransitVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectconnectTransitVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectTransitVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeers">bgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList">DirectconnectTransitVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList">DirectconnectTransitVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceArn">virtualInterfaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArnInput">allocateTransitVirtualInterfaceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeersInput">bgpPeersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayIdInput">directConnectGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLinkInput">enableSiteLinkInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimitInput">rateLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceNameInput">virtualInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn">allocateTransitVirtualInterfaceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLink">enableSiteLink</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimit">rateLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeers"></a>

```typescript
public readonly bgpPeers: DirectconnectTransitVirtualInterfaceBgpPeersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList">DirectconnectTransitVirtualInterfaceBgpPeersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tags"></a>

```typescript
public readonly tags: DirectconnectTransitVirtualInterfaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList">DirectconnectTransitVirtualInterfaceTagsList</a>

---

##### `virtualInterfaceArn`<sup>Required</sup> <a name="virtualInterfaceArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceArn"></a>

```typescript
public readonly virtualInterfaceArn: string;
```

- *Type:* string

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

---

##### `allocateTransitVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="allocateTransitVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArnInput"></a>

```typescript
public readonly allocateTransitVirtualInterfaceRoleArnInput: string;
```

- *Type:* string

---

##### `bgpPeersInput`<sup>Optional</sup> <a name="bgpPeersInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeersInput"></a>

```typescript
public readonly bgpPeersInput: IResolvable | DirectconnectTransitVirtualInterfaceBgpPeers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `directConnectGatewayIdInput`<sup>Optional</sup> <a name="directConnectGatewayIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayIdInput"></a>

```typescript
public readonly directConnectGatewayIdInput: string;
```

- *Type:* string

---

##### `enableSiteLinkInput`<sup>Optional</sup> <a name="enableSiteLinkInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLinkInput"></a>

```typescript
public readonly enableSiteLinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DirectconnectTransitVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]

---

##### `virtualInterfaceNameInput`<sup>Optional</sup> <a name="virtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceNameInput"></a>

```typescript
public readonly virtualInterfaceNameInput: string;
```

- *Type:* string

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `allocateTransitVirtualInterfaceRoleArn`<sup>Required</sup> <a name="allocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn"></a>

```typescript
public readonly allocateTransitVirtualInterfaceRoleArn: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayId"></a>

```typescript
public readonly directConnectGatewayId: string;
```

- *Type:* string

---

##### `enableSiteLink`<sup>Required</sup> <a name="enableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLink"></a>

```typescript
public readonly enableSiteLink: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimit"></a>

```typescript
public readonly rateLimit: string;
```

- *Type:* string

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceName"></a>

```typescript
public readonly virtualInterfaceName: string;
```

- *Type:* string

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectTransitVirtualInterfaceBgpPeers <a name="DirectconnectTransitVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.Initializer"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

const directconnectTransitVirtualInterfaceBgpPeers: directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.addressFamily">addressFamily</a></code> | <code>string</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.asn">asn</a></code> | <code>string</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.authKey">authKey</a></code> | <code>string</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.bgpPeerId">bgpPeerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#bgp_peer_id DirectconnectTransitVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.customerAddress">customerAddress</a></code> | <code>string</code> | The IP address assigned to the customer interface. |

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#address_family DirectconnectTransitVirtualInterface#address_family}

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.asn"></a>

```typescript
public readonly asn: string;
```

- *Type:* string

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#asn DirectconnectTransitVirtualInterface#asn}

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#amazon_address DirectconnectTransitVirtualInterface#amazon_address}

---

##### `authKey`<sup>Optional</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.authKey"></a>

```typescript
public readonly authKey: string;
```

- *Type:* string

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#auth_key DirectconnectTransitVirtualInterface#auth_key}

---

##### `bgpPeerId`<sup>Optional</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```typescript
public readonly bgpPeerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#bgp_peer_id DirectconnectTransitVirtualInterface#bgp_peer_id}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#customer_address DirectconnectTransitVirtualInterface#customer_address}

---

### DirectconnectTransitVirtualInterfaceConfig <a name="DirectconnectTransitVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.Initializer"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

const directconnectTransitVirtualInterfaceConfig: directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.bgpPeers">bgpPeers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]</code> | The BGP peers configured on this virtual interface.. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>string</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>string</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>string</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>number</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.allocateTransitVirtualInterfaceRoleArn">allocateTransitVirtualInterfaceRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to allocate the TransitVifAllocation. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.enableSiteLink">enableSiteLink</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.mtu">mtu</a></code> | <code>number</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.rateLimit">rateLimit</a></code> | <code>string</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]</code> | The tags associated with the private virtual interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.bgpPeers"></a>

```typescript
public readonly bgpPeers: IResolvable | DirectconnectTransitVirtualInterfaceBgpPeers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]

The BGP peers configured on this virtual interface..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#bgp_peers DirectconnectTransitVirtualInterface#bgp_peers}

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#connection_id DirectconnectTransitVirtualInterface#connection_id}

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.directConnectGatewayId"></a>

```typescript
public readonly directConnectGatewayId: string;
```

- *Type:* string

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#direct_connect_gateway_id DirectconnectTransitVirtualInterface#direct_connect_gateway_id}

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```typescript
public readonly virtualInterfaceName: string;
```

- *Type:* string

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#virtual_interface_name DirectconnectTransitVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#vlan DirectconnectTransitVirtualInterface#vlan}

---

##### `allocateTransitVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="allocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.allocateTransitVirtualInterfaceRoleArn"></a>

```typescript
public readonly allocateTransitVirtualInterfaceRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to allocate the TransitVifAllocation.

Needs directconnect:AllocateTransitVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#allocate_transit_virtual_interface_role_arn DirectconnectTransitVirtualInterface#allocate_transit_virtual_interface_role_arn}

---

##### `enableSiteLink`<sup>Optional</sup> <a name="enableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.enableSiteLink"></a>

```typescript
public readonly enableSiteLink: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#enable_site_link DirectconnectTransitVirtualInterface#enable_site_link}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#mtu DirectconnectTransitVirtualInterface#mtu}

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.rateLimit"></a>

```typescript
public readonly rateLimit: string;
```

- *Type:* string

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#rate_limit DirectconnectTransitVirtualInterface#rate_limit}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DirectconnectTransitVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#tags DirectconnectTransitVirtualInterface#tags}

---

### DirectconnectTransitVirtualInterfaceTags <a name="DirectconnectTransitVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.Initializer"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

const directconnectTransitVirtualInterfaceTags: directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#key DirectconnectTransitVirtualInterface#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/directconnect_transit_virtual_interface#value DirectconnectTransitVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectTransitVirtualInterfaceBgpPeersList <a name="DirectconnectTransitVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

new directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get"></a>

```typescript
public get(index: number): DirectconnectTransitVirtualInterfaceBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectTransitVirtualInterfaceBgpPeers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]

---


### DirectconnectTransitVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectTransitVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

new directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAuthKey">resetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">resetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```typescript
public resetAmazonAddress(): void
```

##### `resetAuthKey` <a name="resetAuthKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```typescript
public resetAuthKey(): void
```

##### `resetBgpPeerId` <a name="resetBgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```typescript
public resetBgpPeerId(): void
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```typescript
public resetCustomerAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">amazonAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asnInput">asnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">authKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">bgpPeerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">customerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn">asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey">authKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">bgpPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress">customerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```typescript
public readonly amazonAddressInput: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```typescript
public readonly asnInput: string;
```

- *Type:* string

---

##### `authKeyInput`<sup>Optional</sup> <a name="authKeyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```typescript
public readonly authKeyInput: string;
```

- *Type:* string

---

##### `bgpPeerIdInput`<sup>Optional</sup> <a name="bgpPeerIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```typescript
public readonly bgpPeerIdInput: string;
```

- *Type:* string

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```typescript
public readonly customerAddressInput: string;
```

- *Type:* string

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```typescript
public readonly asn: string;
```

- *Type:* string

---

##### `authKey`<sup>Required</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```typescript
public readonly authKey: string;
```

- *Type:* string

---

##### `bgpPeerId`<sup>Required</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```typescript
public readonly bgpPeerId: string;
```

- *Type:* string

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectTransitVirtualInterfaceBgpPeers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>

---


### DirectconnectTransitVirtualInterfaceTagsList <a name="DirectconnectTransitVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

new directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get"></a>

```typescript
public get(index: number): DirectconnectTransitVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectTransitVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]

---


### DirectconnectTransitVirtualInterfaceTagsOutputReference <a name="DirectconnectTransitVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer"></a>

```typescript
import { directconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

new directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectTransitVirtualInterfaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>

---



