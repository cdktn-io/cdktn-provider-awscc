# `odbOdbPeeringConnection` Submodule <a name="`odbOdbPeeringConnection` Submodule" id="@cdktn/provider-awscc.odbOdbPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbOdbPeeringConnection <a name="OdbOdbPeeringConnection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_odb_peering_connection awscc_odb_odb_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer"></a>

```typescript
import { odbOdbPeeringConnection } from '@cdktn/provider-awscc'

new odbOdbPeeringConnection.OdbOdbPeeringConnection(scope: Construct, id: string, config?: OdbOdbPeeringConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig">OdbOdbPeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig">OdbOdbPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetAdditionalPeerNetworkCidrs">resetAdditionalPeerNetworkCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOdbNetworkId">resetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkId">resetPeerNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkRouteTableIds">resetPeerNetworkRouteTableIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags"></a>

```typescript
public putTags(value: IResolvable | OdbOdbPeeringConnectionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]

---

##### `resetAdditionalPeerNetworkCidrs` <a name="resetAdditionalPeerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetAdditionalPeerNetworkCidrs"></a>

```typescript
public resetAdditionalPeerNetworkCidrs(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetOdbNetworkId` <a name="resetOdbNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOdbNetworkId"></a>

```typescript
public resetOdbNetworkId(): void
```

##### `resetPeerNetworkId` <a name="resetPeerNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkId"></a>

```typescript
public resetPeerNetworkId(): void
```

##### `resetPeerNetworkRouteTableIds` <a name="resetPeerNetworkRouteTableIds" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkRouteTableIds"></a>

```typescript
public resetPeerNetworkRouteTableIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OdbOdbPeeringConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct"></a>

```typescript
import { odbOdbPeeringConnection } from '@cdktn/provider-awscc'

odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement"></a>

```typescript
import { odbOdbPeeringConnection } from '@cdktn/provider-awscc'

odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource"></a>

```typescript
import { odbOdbPeeringConnection } from '@cdktn/provider-awscc'

odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport"></a>

```typescript
import { odbOdbPeeringConnection } from '@cdktn/provider-awscc'

odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OdbOdbPeeringConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbOdbPeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbOdbPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_odb_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OdbOdbPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkArn">odbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionArn">odbPeeringConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionId">odbPeeringConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkArn">peerNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkCidrs">peerNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList">OdbOdbPeeringConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrsInput">additionalPeerNetworkCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkIdInput">odbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkIdInput">peerNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIdsInput">peerNetworkRouteTableIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrs">additionalPeerNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkId">peerNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIds">peerNetworkRouteTableIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `odbNetworkArn`<sup>Required</sup> <a name="odbNetworkArn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkArn"></a>

```typescript
public readonly odbNetworkArn: string;
```

- *Type:* string

---

##### `odbPeeringConnectionArn`<sup>Required</sup> <a name="odbPeeringConnectionArn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionArn"></a>

```typescript
public readonly odbPeeringConnectionArn: string;
```

- *Type:* string

---

##### `odbPeeringConnectionId`<sup>Required</sup> <a name="odbPeeringConnectionId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionId"></a>

```typescript
public readonly odbPeeringConnectionId: string;
```

- *Type:* string

---

##### `peerNetworkArn`<sup>Required</sup> <a name="peerNetworkArn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkArn"></a>

```typescript
public readonly peerNetworkArn: string;
```

- *Type:* string

---

##### `peerNetworkCidrs`<sup>Required</sup> <a name="peerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkCidrs"></a>

```typescript
public readonly peerNetworkCidrs: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tags"></a>

```typescript
public readonly tags: OdbOdbPeeringConnectionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList">OdbOdbPeeringConnectionTagsList</a>

---

##### `additionalPeerNetworkCidrsInput`<sup>Optional</sup> <a name="additionalPeerNetworkCidrsInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrsInput"></a>

```typescript
public readonly additionalPeerNetworkCidrsInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `odbNetworkIdInput`<sup>Optional</sup> <a name="odbNetworkIdInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkIdInput"></a>

```typescript
public readonly odbNetworkIdInput: string;
```

- *Type:* string

---

##### `peerNetworkIdInput`<sup>Optional</sup> <a name="peerNetworkIdInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkIdInput"></a>

```typescript
public readonly peerNetworkIdInput: string;
```

- *Type:* string

---

##### `peerNetworkRouteTableIdsInput`<sup>Optional</sup> <a name="peerNetworkRouteTableIdsInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIdsInput"></a>

```typescript
public readonly peerNetworkRouteTableIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OdbOdbPeeringConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]

---

##### `additionalPeerNetworkCidrs`<sup>Required</sup> <a name="additionalPeerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrs"></a>

```typescript
public readonly additionalPeerNetworkCidrs: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

---

##### `peerNetworkId`<sup>Required</sup> <a name="peerNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkId"></a>

```typescript
public readonly peerNetworkId: string;
```

- *Type:* string

---

##### `peerNetworkRouteTableIds`<sup>Required</sup> <a name="peerNetworkRouteTableIds" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIds"></a>

```typescript
public readonly peerNetworkRouteTableIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbOdbPeeringConnectionConfig <a name="OdbOdbPeeringConnectionConfig" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.Initializer"></a>

```typescript
import { odbOdbPeeringConnection } from '@cdktn/provider-awscc'

const odbOdbPeeringConnectionConfig: odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.additionalPeerNetworkCidrs">additionalPeerNetworkCidrs</a></code> | <code>string[]</code> | The additional CIDR blocks for the ODB peering connection. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.displayName">displayName</a></code> | <code>string</code> | The name of the ODB peering connection. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | The unique identifier of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkId">peerNetworkId</a></code> | <code>string</code> | The unique identifier of the peer network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkRouteTableIds">peerNetworkRouteTableIds</a></code> | <code>string[]</code> | The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]</code> | Tags to assign to the Odb peering connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalPeerNetworkCidrs`<sup>Optional</sup> <a name="additionalPeerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.additionalPeerNetworkCidrs"></a>

```typescript
public readonly additionalPeerNetworkCidrs: string[];
```

- *Type:* string[]

The additional CIDR blocks for the ODB peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_odb_peering_connection#additional_peer_network_cidrs OdbOdbPeeringConnection#additional_peer_network_cidrs}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of the ODB peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_odb_peering_connection#display_name OdbOdbPeeringConnection#display_name}

---

##### `odbNetworkId`<sup>Optional</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

The unique identifier of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_odb_peering_connection#odb_network_id OdbOdbPeeringConnection#odb_network_id}

---

##### `peerNetworkId`<sup>Optional</sup> <a name="peerNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkId"></a>

```typescript
public readonly peerNetworkId: string;
```

- *Type:* string

The unique identifier of the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_odb_peering_connection#peer_network_id OdbOdbPeeringConnection#peer_network_id}

---

##### `peerNetworkRouteTableIds`<sup>Optional</sup> <a name="peerNetworkRouteTableIds" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkRouteTableIds"></a>

```typescript
public readonly peerNetworkRouteTableIds: string[];
```

- *Type:* string[]

The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_odb_peering_connection#peer_network_route_table_ids OdbOdbPeeringConnection#peer_network_route_table_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OdbOdbPeeringConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]

Tags to assign to the Odb peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_odb_peering_connection#tags OdbOdbPeeringConnection#tags}

---

### OdbOdbPeeringConnectionTags <a name="OdbOdbPeeringConnectionTags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.Initializer"></a>

```typescript
import { odbOdbPeeringConnection } from '@cdktn/provider-awscc'

const odbOdbPeeringConnectionTags: odbOdbPeeringConnection.OdbOdbPeeringConnectionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_odb_peering_connection#value OdbOdbPeeringConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbOdbPeeringConnectionTagsList <a name="OdbOdbPeeringConnectionTagsList" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer"></a>

```typescript
import { odbOdbPeeringConnection } from '@cdktn/provider-awscc'

new odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get"></a>

```typescript
public get(index: number): OdbOdbPeeringConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbOdbPeeringConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>[]

---


### OdbOdbPeeringConnectionTagsOutputReference <a name="OdbOdbPeeringConnectionTagsOutputReference" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer"></a>

```typescript
import { odbOdbPeeringConnection } from '@cdktn/provider-awscc'

new odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbOdbPeeringConnectionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags">OdbOdbPeeringConnectionTags</a>

---



