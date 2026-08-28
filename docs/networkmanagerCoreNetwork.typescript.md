# `networkmanagerCoreNetwork` Submodule <a name="`networkmanagerCoreNetwork` Submodule" id="@cdktn/provider-awscc.networkmanagerCoreNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCoreNetwork <a name="NetworkmanagerCoreNetwork" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_core_network awscc_networkmanager_core_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetwork(scope: Construct, id: string, config: NetworkmanagerCoreNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig">NetworkmanagerCoreNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig">NetworkmanagerCoreNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerCoreNetworkTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags">NetworkmanagerCoreNetworkTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetPolicyDocument"></a>

```typescript
public resetPolicyDocument(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerCoreNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.generateConfigForImport"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkmanagerCoreNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerCoreNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerCoreNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_core_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerCoreNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.edges">edges</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList">NetworkmanagerCoreNetworkEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.networkFunctionGroups">networkFunctionGroups</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList">NetworkmanagerCoreNetworkNetworkFunctionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.ownerAccount">ownerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.segments">segments</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList">NetworkmanagerCoreNetworkSegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList">NetworkmanagerCoreNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags">NetworkmanagerCoreNetworkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `edges`<sup>Required</sup> <a name="edges" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.edges"></a>

```typescript
public readonly edges: NetworkmanagerCoreNetworkEdgesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList">NetworkmanagerCoreNetworkEdgesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkFunctionGroups`<sup>Required</sup> <a name="networkFunctionGroups" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.networkFunctionGroups"></a>

```typescript
public readonly networkFunctionGroups: NetworkmanagerCoreNetworkNetworkFunctionGroupsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList">NetworkmanagerCoreNetworkNetworkFunctionGroupsList</a>

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.ownerAccount"></a>

```typescript
public readonly ownerAccount: string;
```

- *Type:* string

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.segments"></a>

```typescript
public readonly segments: NetworkmanagerCoreNetworkSegmentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList">NetworkmanagerCoreNetworkSegmentsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerCoreNetworkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList">NetworkmanagerCoreNetworkTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkIdInput"></a>

```typescript
public readonly globalNetworkIdInput: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerCoreNetworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags">NetworkmanagerCoreNetworkTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCoreNetworkConfig <a name="NetworkmanagerCoreNetworkConfig" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const networkmanagerCoreNetworkConfig: networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | The ID of the global network that your core network is a part of. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.description">description</a></code> | <code>string</code> | The description of core network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | Live policy document for the core network, you must provide PolicyDocument in Json Format. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags">NetworkmanagerCoreNetworkTags</a>[]</code> | The tags for the global network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

The ID of the global network that your core network is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

Live policy document for the core network, you must provide PolicyDocument in Json Format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_core_network#policy_document NetworkmanagerCoreNetwork#policy_document}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerCoreNetworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags">NetworkmanagerCoreNetworkTags</a>[]

The tags for the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}

---

### NetworkmanagerCoreNetworkEdges <a name="NetworkmanagerCoreNetworkEdges" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const networkmanagerCoreNetworkEdges: networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges = { ... }
```


### NetworkmanagerCoreNetworkNetworkFunctionGroups <a name="NetworkmanagerCoreNetworkNetworkFunctionGroups" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroups.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const networkmanagerCoreNetworkNetworkFunctionGroups: networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroups = { ... }
```


### NetworkmanagerCoreNetworkNetworkFunctionGroupsSegments <a name="NetworkmanagerCoreNetworkNetworkFunctionGroupsSegments" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegments.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const networkmanagerCoreNetworkNetworkFunctionGroupsSegments: networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegments = { ... }
```


### NetworkmanagerCoreNetworkSegments <a name="NetworkmanagerCoreNetworkSegments" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const networkmanagerCoreNetworkSegments: networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments = { ... }
```


### NetworkmanagerCoreNetworkTags <a name="NetworkmanagerCoreNetworkTags" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const networkmanagerCoreNetworkTags: networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_core_network#key NetworkmanagerCoreNetwork#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_core_network#value NetworkmanagerCoreNetwork#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCoreNetworkEdgesList <a name="NetworkmanagerCoreNetworkEdgesList" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get"></a>

```typescript
public get(index: number): NetworkmanagerCoreNetworkEdgesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkmanagerCoreNetworkEdgesOutputReference <a name="NetworkmanagerCoreNetworkEdgesOutputReference" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges">NetworkmanagerCoreNetworkEdges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks"></a>

```typescript
public readonly insideCidrBlocks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerCoreNetworkEdges;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges">NetworkmanagerCoreNetworkEdges</a>

---


### NetworkmanagerCoreNetworkNetworkFunctionGroupsList <a name="NetworkmanagerCoreNetworkNetworkFunctionGroupsList" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.get"></a>

```typescript
public get(index: number): NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference <a name="NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.edgeLocations">edgeLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.segments">segments</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference">NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroups">NetworkmanagerCoreNetworkNetworkFunctionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.segments"></a>

```typescript
public readonly segments: NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference">NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerCoreNetworkNetworkFunctionGroups;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroups">NetworkmanagerCoreNetworkNetworkFunctionGroups</a>

---


### NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference <a name="NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendTo">sendTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendVia">sendVia</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegments">NetworkmanagerCoreNetworkNetworkFunctionGroupsSegments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sendTo`<sup>Required</sup> <a name="sendTo" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendTo"></a>

```typescript
public readonly sendTo: string[];
```

- *Type:* string[]

---

##### `sendVia`<sup>Required</sup> <a name="sendVia" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendVia"></a>

```typescript
public readonly sendVia: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerCoreNetworkNetworkFunctionGroupsSegments;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkNetworkFunctionGroupsSegments">NetworkmanagerCoreNetworkNetworkFunctionGroupsSegments</a>

---


### NetworkmanagerCoreNetworkSegmentsList <a name="NetworkmanagerCoreNetworkSegmentsList" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get"></a>

```typescript
public get(index: number): NetworkmanagerCoreNetworkSegmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkmanagerCoreNetworkSegmentsOutputReference <a name="NetworkmanagerCoreNetworkSegmentsOutputReference" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations">edgeLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments">sharedSegments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments">NetworkmanagerCoreNetworkSegments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sharedSegments`<sup>Required</sup> <a name="sharedSegments" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments"></a>

```typescript
public readonly sharedSegments: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerCoreNetworkSegments;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments">NetworkmanagerCoreNetworkSegments</a>

---


### NetworkmanagerCoreNetworkTagsList <a name="NetworkmanagerCoreNetworkTagsList" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerCoreNetworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags">NetworkmanagerCoreNetworkTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerCoreNetworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags">NetworkmanagerCoreNetworkTags</a>[]

---


### NetworkmanagerCoreNetworkTagsOutputReference <a name="NetworkmanagerCoreNetworkTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags">NetworkmanagerCoreNetworkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerCoreNetworkTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTags">NetworkmanagerCoreNetworkTags</a>

---



