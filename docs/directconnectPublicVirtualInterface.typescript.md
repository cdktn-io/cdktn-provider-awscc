# `directconnectPublicVirtualInterface` Submodule <a name="`directconnectPublicVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectPublicVirtualInterface <a name="DirectconnectPublicVirtualInterface" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface awscc_directconnect_public_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

new directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface(scope: Construct, id: string, config: DirectconnectPublicVirtualInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig">DirectconnectPublicVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig">DirectconnectPublicVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers">putBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetAllocatePublicVirtualInterfaceRoleArn">resetAllocatePublicVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRateLimit">resetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRouteFilterPrefixes">resetRouteFilterPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpPeers` <a name="putBgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers"></a>

```typescript
public putBgpPeers(value: IResolvable | DirectconnectPublicVirtualInterfaceBgpPeers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags"></a>

```typescript
public putTags(value: IResolvable | DirectconnectPublicVirtualInterfaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]

---

##### `resetAllocatePublicVirtualInterfaceRoleArn` <a name="resetAllocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetAllocatePublicVirtualInterfaceRoleArn"></a>

```typescript
public resetAllocatePublicVirtualInterfaceRoleArn(): void
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRateLimit"></a>

```typescript
public resetRateLimit(): void
```

##### `resetRouteFilterPrefixes` <a name="resetRouteFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRouteFilterPrefixes"></a>

```typescript
public resetRouteFilterPrefixes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectconnectPublicVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectconnectPublicVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectPublicVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeers">bgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList">DirectconnectPublicVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList">DirectconnectPublicVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceArn">virtualInterfaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArnInput">allocatePublicVirtualInterfaceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeersInput">bgpPeersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimitInput">rateLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixesInput">routeFilterPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceNameInput">virtualInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn">allocatePublicVirtualInterfaceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimit">rateLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeers"></a>

```typescript
public readonly bgpPeers: DirectconnectPublicVirtualInterfaceBgpPeersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList">DirectconnectPublicVirtualInterfaceBgpPeersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tags"></a>

```typescript
public readonly tags: DirectconnectPublicVirtualInterfaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList">DirectconnectPublicVirtualInterfaceTagsList</a>

---

##### `virtualInterfaceArn`<sup>Required</sup> <a name="virtualInterfaceArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceArn"></a>

```typescript
public readonly virtualInterfaceArn: string;
```

- *Type:* string

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

---

##### `allocatePublicVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="allocatePublicVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArnInput"></a>

```typescript
public readonly allocatePublicVirtualInterfaceRoleArnInput: string;
```

- *Type:* string

---

##### `bgpPeersInput`<sup>Optional</sup> <a name="bgpPeersInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeersInput"></a>

```typescript
public readonly bgpPeersInput: IResolvable | DirectconnectPublicVirtualInterfaceBgpPeers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: string;
```

- *Type:* string

---

##### `routeFilterPrefixesInput`<sup>Optional</sup> <a name="routeFilterPrefixesInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixesInput"></a>

```typescript
public readonly routeFilterPrefixesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DirectconnectPublicVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]

---

##### `virtualInterfaceNameInput`<sup>Optional</sup> <a name="virtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceNameInput"></a>

```typescript
public readonly virtualInterfaceNameInput: string;
```

- *Type:* string

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `allocatePublicVirtualInterfaceRoleArn`<sup>Required</sup> <a name="allocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn"></a>

```typescript
public readonly allocatePublicVirtualInterfaceRoleArn: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimit"></a>

```typescript
public readonly rateLimit: string;
```

- *Type:* string

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="routeFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixes"></a>

```typescript
public readonly routeFilterPrefixes: string[];
```

- *Type:* string[]

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceName"></a>

```typescript
public readonly virtualInterfaceName: string;
```

- *Type:* string

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectPublicVirtualInterfaceBgpPeers <a name="DirectconnectPublicVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.Initializer"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

const directconnectPublicVirtualInterfaceBgpPeers: directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.addressFamily">addressFamily</a></code> | <code>string</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.asn">asn</a></code> | <code>string</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.authKey">authKey</a></code> | <code>string</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.bgpPeerId">bgpPeerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#bgp_peer_id DirectconnectPublicVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.customerAddress">customerAddress</a></code> | <code>string</code> | The IP address assigned to the customer interface. |

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#address_family DirectconnectPublicVirtualInterface#address_family}

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.asn"></a>

```typescript
public readonly asn: string;
```

- *Type:* string

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#asn DirectconnectPublicVirtualInterface#asn}

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#amazon_address DirectconnectPublicVirtualInterface#amazon_address}

---

##### `authKey`<sup>Optional</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.authKey"></a>

```typescript
public readonly authKey: string;
```

- *Type:* string

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#auth_key DirectconnectPublicVirtualInterface#auth_key}

---

##### `bgpPeerId`<sup>Optional</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```typescript
public readonly bgpPeerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#bgp_peer_id DirectconnectPublicVirtualInterface#bgp_peer_id}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#customer_address DirectconnectPublicVirtualInterface#customer_address}

---

### DirectconnectPublicVirtualInterfaceConfig <a name="DirectconnectPublicVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.Initializer"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

const directconnectPublicVirtualInterfaceConfig: directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.bgpPeers">bgpPeers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]</code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>string</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>string</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>number</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.allocatePublicVirtualInterfaceRoleArn">allocatePublicVirtualInterfaceRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to allocate the public virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.rateLimit">rateLimit</a></code> | <code>string</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>string[]</code> | The routes to be advertised to the AWS network in this region. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]</code> | The tags associated with the public virtual interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.bgpPeers"></a>

```typescript
public readonly bgpPeers: IResolvable | DirectconnectPublicVirtualInterfaceBgpPeers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#bgp_peers DirectconnectPublicVirtualInterface#bgp_peers}

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#connection_id DirectconnectPublicVirtualInterface#connection_id}

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```typescript
public readonly virtualInterfaceName: string;
```

- *Type:* string

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#virtual_interface_name DirectconnectPublicVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#vlan DirectconnectPublicVirtualInterface#vlan}

---

##### `allocatePublicVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="allocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.allocatePublicVirtualInterfaceRoleArn"></a>

```typescript
public readonly allocatePublicVirtualInterfaceRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to allocate the public virtual interface.

Needs directconnect:AllocatePublicVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#allocate_public_virtual_interface_role_arn DirectconnectPublicVirtualInterface#allocate_public_virtual_interface_role_arn}

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.rateLimit"></a>

```typescript
public readonly rateLimit: string;
```

- *Type:* string

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#rate_limit DirectconnectPublicVirtualInterface#rate_limit}

---

##### `routeFilterPrefixes`<sup>Optional</sup> <a name="routeFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.routeFilterPrefixes"></a>

```typescript
public readonly routeFilterPrefixes: string[];
```

- *Type:* string[]

The routes to be advertised to the AWS network in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#route_filter_prefixes DirectconnectPublicVirtualInterface#route_filter_prefixes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DirectconnectPublicVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]

The tags associated with the public virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#tags DirectconnectPublicVirtualInterface#tags}

---

### DirectconnectPublicVirtualInterfaceTags <a name="DirectconnectPublicVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.Initializer"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

const directconnectPublicVirtualInterfaceTags: directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#key DirectconnectPublicVirtualInterface#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#value DirectconnectPublicVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectPublicVirtualInterfaceBgpPeersList <a name="DirectconnectPublicVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

new directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get"></a>

```typescript
public get(index: number): DirectconnectPublicVirtualInterfaceBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectPublicVirtualInterfaceBgpPeers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]

---


### DirectconnectPublicVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectPublicVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

new directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAuthKey">resetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">resetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```typescript
public resetAmazonAddress(): void
```

##### `resetAuthKey` <a name="resetAuthKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```typescript
public resetAuthKey(): void
```

##### `resetBgpPeerId` <a name="resetBgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```typescript
public resetBgpPeerId(): void
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```typescript
public resetCustomerAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">amazonAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asnInput">asnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">authKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">bgpPeerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">customerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn">asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey">authKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">bgpPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress">customerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```typescript
public readonly amazonAddressInput: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```typescript
public readonly asnInput: string;
```

- *Type:* string

---

##### `authKeyInput`<sup>Optional</sup> <a name="authKeyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```typescript
public readonly authKeyInput: string;
```

- *Type:* string

---

##### `bgpPeerIdInput`<sup>Optional</sup> <a name="bgpPeerIdInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```typescript
public readonly bgpPeerIdInput: string;
```

- *Type:* string

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```typescript
public readonly customerAddressInput: string;
```

- *Type:* string

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```typescript
public readonly asn: string;
```

- *Type:* string

---

##### `authKey`<sup>Required</sup> <a name="authKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```typescript
public readonly authKey: string;
```

- *Type:* string

---

##### `bgpPeerId`<sup>Required</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```typescript
public readonly bgpPeerId: string;
```

- *Type:* string

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectPublicVirtualInterfaceBgpPeers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>

---


### DirectconnectPublicVirtualInterfaceTagsList <a name="DirectconnectPublicVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

new directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get"></a>

```typescript
public get(index: number): DirectconnectPublicVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectPublicVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]

---


### DirectconnectPublicVirtualInterfaceTagsOutputReference <a name="DirectconnectPublicVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer"></a>

```typescript
import { directconnectPublicVirtualInterface } from '@cdktn/provider-awscc'

new directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectPublicVirtualInterfaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>

---



