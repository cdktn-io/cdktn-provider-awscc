# `networkmanagerConnectPeer` Submodule <a name="`networkmanagerConnectPeer` Submodule" id="@cdktn/provider-awscc.networkmanagerConnectPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerConnectPeer <a name="NetworkmanagerConnectPeer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer awscc_networkmanager_connect_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

new networkmanagerConnectPeer.NetworkmanagerConnectPeer(scope: Construct, id: string, config: NetworkmanagerConnectPeerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig">NetworkmanagerConnectPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig">NetworkmanagerConnectPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putBgpOptions">putBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetBgpOptions">resetBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetCoreNetworkAddress">resetCoreNetworkAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetInsideCidrBlocks">resetInsideCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetSubnetArn">resetSubnetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpOptions` <a name="putBgpOptions" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putBgpOptions"></a>

```typescript
public putBgpOptions(value: NetworkmanagerConnectPeerBgpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putBgpOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerConnectPeerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags">NetworkmanagerConnectPeerTags</a>[]

---

##### `resetBgpOptions` <a name="resetBgpOptions" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetBgpOptions"></a>

```typescript
public resetBgpOptions(): void
```

##### `resetCoreNetworkAddress` <a name="resetCoreNetworkAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetCoreNetworkAddress"></a>

```typescript
public resetCoreNetworkAddress(): void
```

##### `resetInsideCidrBlocks` <a name="resetInsideCidrBlocks" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetInsideCidrBlocks"></a>

```typescript
public resetInsideCidrBlocks(): void
```

##### `resetSubnetArn` <a name="resetSubnetArn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetSubnetArn"></a>

```typescript
public resetSubnetArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerConnectPeer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isConstruct"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

networkmanagerConnectPeer.NetworkmanagerConnectPeer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformElement"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformResource"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkmanagerConnectPeer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerConnectPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerConnectPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerConnectPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptions">bgpOptions</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference">NetworkmanagerConnectPeerBgpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference">NetworkmanagerConnectPeerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectPeerId">connectPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.lastModificationErrors">lastModificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList">NetworkmanagerConnectPeerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptionsInput">bgpOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentIdInput">connectAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddressInput">coreNetworkAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocksInput">insideCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddressInput">peerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.subnetArnInput">subnetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags">NetworkmanagerConnectPeerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentId">connectAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddress">coreNetworkAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.subnetArn">subnetArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bgpOptions`<sup>Required</sup> <a name="bgpOptions" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptions"></a>

```typescript
public readonly bgpOptions: NetworkmanagerConnectPeerBgpOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference">NetworkmanagerConnectPeerBgpOptionsOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.configuration"></a>

```typescript
public readonly configuration: NetworkmanagerConnectPeerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference">NetworkmanagerConnectPeerConfigurationOutputReference</a>

---

##### `connectPeerId`<sup>Required</sup> <a name="connectPeerId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectPeerId"></a>

```typescript
public readonly connectPeerId: string;
```

- *Type:* string

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModificationErrors`<sup>Required</sup> <a name="lastModificationErrors" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.lastModificationErrors"></a>

```typescript
public readonly lastModificationErrors: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerConnectPeerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList">NetworkmanagerConnectPeerTagsList</a>

---

##### `bgpOptionsInput`<sup>Optional</sup> <a name="bgpOptionsInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.bgpOptionsInput"></a>

```typescript
public readonly bgpOptionsInput: IResolvable | NetworkmanagerConnectPeerBgpOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a>

---

##### `connectAttachmentIdInput`<sup>Optional</sup> <a name="connectAttachmentIdInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentIdInput"></a>

```typescript
public readonly connectAttachmentIdInput: string;
```

- *Type:* string

---

##### `coreNetworkAddressInput`<sup>Optional</sup> <a name="coreNetworkAddressInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddressInput"></a>

```typescript
public readonly coreNetworkAddressInput: string;
```

- *Type:* string

---

##### `insideCidrBlocksInput`<sup>Optional</sup> <a name="insideCidrBlocksInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocksInput"></a>

```typescript
public readonly insideCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `peerAddressInput`<sup>Optional</sup> <a name="peerAddressInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddressInput"></a>

```typescript
public readonly peerAddressInput: string;
```

- *Type:* string

---

##### `subnetArnInput`<sup>Optional</sup> <a name="subnetArnInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.subnetArnInput"></a>

```typescript
public readonly subnetArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerConnectPeerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags">NetworkmanagerConnectPeerTags</a>[]

---

##### `connectAttachmentId`<sup>Required</sup> <a name="connectAttachmentId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.connectAttachmentId"></a>

```typescript
public readonly connectAttachmentId: string;
```

- *Type:* string

---

##### `coreNetworkAddress`<sup>Required</sup> <a name="coreNetworkAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.coreNetworkAddress"></a>

```typescript
public readonly coreNetworkAddress: string;
```

- *Type:* string

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.insideCidrBlocks"></a>

```typescript
public readonly insideCidrBlocks: string[];
```

- *Type:* string[]

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `subnetArn`<sup>Required</sup> <a name="subnetArn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.subnetArn"></a>

```typescript
public readonly subnetArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerConnectPeerBgpOptions <a name="NetworkmanagerConnectPeerBgpOptions" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

const networkmanagerConnectPeerBgpOptions: networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions.property.peerAsn">peerAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#peer_asn NetworkmanagerConnectPeer#peer_asn}. |

---

##### `peerAsn`<sup>Optional</sup> <a name="peerAsn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#peer_asn NetworkmanagerConnectPeer#peer_asn}.

---

### NetworkmanagerConnectPeerConfig <a name="NetworkmanagerConnectPeerConfig" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

const networkmanagerConnectPeerConfig: networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connectAttachmentId">connectAttachmentId</a></code> | <code>string</code> | The ID of the attachment to connect. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.peerAddress">peerAddress</a></code> | <code>string</code> | The IP address of the Connect peer. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.bgpOptions">bgpOptions</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a></code> | Bgp options for connect peer. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.coreNetworkAddress">coreNetworkAddress</a></code> | <code>string</code> | The IP address of a core network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>string[]</code> | The inside IP addresses used for a Connect peer configuration. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.subnetArn">subnetArn</a></code> | <code>string</code> | The subnet ARN for the connect peer. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags">NetworkmanagerConnectPeerTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectAttachmentId`<sup>Required</sup> <a name="connectAttachmentId" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.connectAttachmentId"></a>

```typescript
public readonly connectAttachmentId: string;
```

- *Type:* string

The ID of the attachment to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#connect_attachment_id NetworkmanagerConnectPeer#connect_attachment_id}

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

The IP address of the Connect peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#peer_address NetworkmanagerConnectPeer#peer_address}

---

##### `bgpOptions`<sup>Optional</sup> <a name="bgpOptions" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.bgpOptions"></a>

```typescript
public readonly bgpOptions: NetworkmanagerConnectPeerBgpOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a>

Bgp options for connect peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#bgp_options NetworkmanagerConnectPeer#bgp_options}

---

##### `coreNetworkAddress`<sup>Optional</sup> <a name="coreNetworkAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.coreNetworkAddress"></a>

```typescript
public readonly coreNetworkAddress: string;
```

- *Type:* string

The IP address of a core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#core_network_address NetworkmanagerConnectPeer#core_network_address}

---

##### `insideCidrBlocks`<sup>Optional</sup> <a name="insideCidrBlocks" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.insideCidrBlocks"></a>

```typescript
public readonly insideCidrBlocks: string[];
```

- *Type:* string[]

The inside IP addresses used for a Connect peer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#inside_cidr_blocks NetworkmanagerConnectPeer#inside_cidr_blocks}

---

##### `subnetArn`<sup>Optional</sup> <a name="subnetArn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.subnetArn"></a>

```typescript
public readonly subnetArn: string;
```

- *Type:* string

The subnet ARN for the connect peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#subnet_arn NetworkmanagerConnectPeer#subnet_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerConnectPeerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags">NetworkmanagerConnectPeerTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#tags NetworkmanagerConnectPeer#tags}

---

### NetworkmanagerConnectPeerConfiguration <a name="NetworkmanagerConnectPeerConfiguration" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

const networkmanagerConnectPeerConfiguration: networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration = { ... }
```


### NetworkmanagerConnectPeerConfigurationBgpConfigurations <a name="NetworkmanagerConnectPeerConfigurationBgpConfigurations" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

const networkmanagerConnectPeerConfigurationBgpConfigurations: networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations = { ... }
```


### NetworkmanagerConnectPeerTags <a name="NetworkmanagerConnectPeerTags" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

const networkmanagerConnectPeerTags: networkmanagerConnectPeer.NetworkmanagerConnectPeerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#key NetworkmanagerConnectPeer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_connect_peer#value NetworkmanagerConnectPeer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerConnectPeerBgpOptionsOutputReference <a name="NetworkmanagerConnectPeerBgpOptionsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

new networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resetPeerAsn">resetPeerAsn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeerAsn` <a name="resetPeerAsn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.resetPeerAsn"></a>

```typescript
public resetPeerAsn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsnInput">peerAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peerAsnInput`<sup>Optional</sup> <a name="peerAsnInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsnInput"></a>

```typescript
public readonly peerAsnInput: number;
```

- *Type:* number

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectPeerBgpOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerBgpOptions">NetworkmanagerConnectPeerBgpOptions</a>

---


### NetworkmanagerConnectPeerConfigurationBgpConfigurationsList <a name="NetworkmanagerConnectPeerConfigurationBgpConfigurationsList" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

new networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get"></a>

```typescript
public get(index: number): NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference <a name="NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

new networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAddress">coreNetworkAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAsn">coreNetworkAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations">NetworkmanagerConnectPeerConfigurationBgpConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreNetworkAddress`<sup>Required</sup> <a name="coreNetworkAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAddress"></a>

```typescript
public readonly coreNetworkAddress: string;
```

- *Type:* string

---

##### `coreNetworkAsn`<sup>Required</sup> <a name="coreNetworkAsn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.coreNetworkAsn"></a>

```typescript
public readonly coreNetworkAsn: number;
```

- *Type:* number

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerConnectPeerConfigurationBgpConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurations">NetworkmanagerConnectPeerConfigurationBgpConfigurations</a>

---


### NetworkmanagerConnectPeerConfigurationOutputReference <a name="NetworkmanagerConnectPeerConfigurationOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

new networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.bgpConfigurations">bgpConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList">NetworkmanagerConnectPeerConfigurationBgpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.coreNetworkAddress">coreNetworkAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration">NetworkmanagerConnectPeerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpConfigurations`<sup>Required</sup> <a name="bgpConfigurations" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.bgpConfigurations"></a>

```typescript
public readonly bgpConfigurations: NetworkmanagerConnectPeerConfigurationBgpConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationBgpConfigurationsList">NetworkmanagerConnectPeerConfigurationBgpConfigurationsList</a>

---

##### `coreNetworkAddress`<sup>Required</sup> <a name="coreNetworkAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.coreNetworkAddress"></a>

```typescript
public readonly coreNetworkAddress: string;
```

- *Type:* string

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.insideCidrBlocks"></a>

```typescript
public readonly insideCidrBlocks: string[];
```

- *Type:* string[]

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerConnectPeerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerConfiguration">NetworkmanagerConnectPeerConfiguration</a>

---


### NetworkmanagerConnectPeerTagsList <a name="NetworkmanagerConnectPeerTagsList" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

new networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerConnectPeerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags">NetworkmanagerConnectPeerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectPeerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags">NetworkmanagerConnectPeerTags</a>[]

---


### NetworkmanagerConnectPeerTagsOutputReference <a name="NetworkmanagerConnectPeerTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerConnectPeer } from '@cdktn/provider-awscc'

new networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags">NetworkmanagerConnectPeerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerConnectPeerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerConnectPeer.NetworkmanagerConnectPeerTags">NetworkmanagerConnectPeerTags</a>

---



