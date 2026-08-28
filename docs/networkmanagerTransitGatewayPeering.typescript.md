# `networkmanagerTransitGatewayPeering` Submodule <a name="`networkmanagerTransitGatewayPeering` Submodule" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerTransitGatewayPeering <a name="NetworkmanagerTransitGatewayPeering" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering awscc_networkmanager_transit_gateway_peering}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayPeering } from '@cdktn/provider-awscc'

new networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering(scope: Construct, id: string, config: NetworkmanagerTransitGatewayPeeringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig">NetworkmanagerTransitGatewayPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig">NetworkmanagerTransitGatewayPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerTransitGatewayPeeringTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerTransitGatewayPeering resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isConstruct"></a>

```typescript
import { networkmanagerTransitGatewayPeering } from '@cdktn/provider-awscc'

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformElement"></a>

```typescript
import { networkmanagerTransitGatewayPeering } from '@cdktn/provider-awscc'

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformResource"></a>

```typescript
import { networkmanagerTransitGatewayPeering } from '@cdktn/provider-awscc'

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport"></a>

```typescript
import { networkmanagerTransitGatewayPeering } from '@cdktn/provider-awscc'

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkmanagerTransitGatewayPeering resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerTransitGatewayPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerTransitGatewayPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerTransitGatewayPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.lastModificationErrors">lastModificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.peeringId">peeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.peeringType">peeringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList">NetworkmanagerTransitGatewayPeeringTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayPeeringAttachmentId">transitGatewayPeeringAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArnInput">transitGatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArn">transitGatewayArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModificationErrors`<sup>Required</sup> <a name="lastModificationErrors" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.lastModificationErrors"></a>

```typescript
public readonly lastModificationErrors: string[];
```

- *Type:* string[]

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

---

##### `peeringType`<sup>Required</sup> <a name="peeringType" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.peeringType"></a>

```typescript
public readonly peeringType: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerTransitGatewayPeeringTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList">NetworkmanagerTransitGatewayPeeringTagsList</a>

---

##### `transitGatewayPeeringAttachmentId`<sup>Required</sup> <a name="transitGatewayPeeringAttachmentId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayPeeringAttachmentId"></a>

```typescript
public readonly transitGatewayPeeringAttachmentId: string;
```

- *Type:* string

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkIdInput"></a>

```typescript
public readonly coreNetworkIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerTransitGatewayPeeringTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>[]

---

##### `transitGatewayArnInput`<sup>Optional</sup> <a name="transitGatewayArnInput" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArnInput"></a>

```typescript
public readonly transitGatewayArnInput: string;
```

- *Type:* string

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `transitGatewayArn`<sup>Required</sup> <a name="transitGatewayArn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArn"></a>

```typescript
public readonly transitGatewayArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerTransitGatewayPeeringConfig <a name="NetworkmanagerTransitGatewayPeeringConfig" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayPeering } from '@cdktn/provider-awscc'

const networkmanagerTransitGatewayPeeringConfig: networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | The Id of the core network that you want to peer a transit gateway to. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.transitGatewayArn">transitGatewayArn</a></code> | <code>string</code> | The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

The Id of the core network that you want to peer a transit gateway to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#core_network_id NetworkmanagerTransitGatewayPeering#core_network_id}

---

##### `transitGatewayArn`<sup>Required</sup> <a name="transitGatewayArn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.transitGatewayArn"></a>

```typescript
public readonly transitGatewayArn: string;
```

- *Type:* string

The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#transit_gateway_arn NetworkmanagerTransitGatewayPeering#transit_gateway_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerTransitGatewayPeeringTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#tags NetworkmanagerTransitGatewayPeering#tags}

---

### NetworkmanagerTransitGatewayPeeringTags <a name="NetworkmanagerTransitGatewayPeeringTags" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayPeering } from '@cdktn/provider-awscc'

const networkmanagerTransitGatewayPeeringTags: networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#key NetworkmanagerTransitGatewayPeering#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#value NetworkmanagerTransitGatewayPeering#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerTransitGatewayPeeringTagsList <a name="NetworkmanagerTransitGatewayPeeringTagsList" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayPeering } from '@cdktn/provider-awscc'

new networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerTransitGatewayPeeringTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerTransitGatewayPeeringTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>[]

---


### NetworkmanagerTransitGatewayPeeringTagsOutputReference <a name="NetworkmanagerTransitGatewayPeeringTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerTransitGatewayPeering } from '@cdktn/provider-awscc'

new networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerTransitGatewayPeeringTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>

---



