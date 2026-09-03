# `directconnectDirectConnectGatewayAssociation` Submodule <a name="`directconnectDirectConnectGatewayAssociation` Submodule" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectDirectConnectGatewayAssociation <a name="DirectconnectDirectConnectGatewayAssociation" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association awscc_directconnect_direct_connect_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer"></a>

```typescript
import { directconnectDirectConnectGatewayAssociation } from '@cdktn/provider-awscc'

new directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation(scope: Construct, id: string, config: DirectconnectDirectConnectGatewayAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig">DirectconnectDirectConnectGatewayAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig">DirectconnectDirectConnectGatewayAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAcceptDirectConnectGatewayAssociationProposalRoleArn">resetAcceptDirectConnectGatewayAssociationProposalRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAllowedPrefixesToDirectConnectGateway">resetAllowedPrefixesToDirectConnectGateway</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcceptDirectConnectGatewayAssociationProposalRoleArn` <a name="resetAcceptDirectConnectGatewayAssociationProposalRoleArn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAcceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```typescript
public resetAcceptDirectConnectGatewayAssociationProposalRoleArn(): void
```

##### `resetAllowedPrefixesToDirectConnectGateway` <a name="resetAllowedPrefixesToDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAllowedPrefixesToDirectConnectGateway"></a>

```typescript
public resetAllowedPrefixesToDirectConnectGateway(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectDirectConnectGatewayAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct"></a>

```typescript
import { directconnectDirectConnectGatewayAssociation } from '@cdktn/provider-awscc'

directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement"></a>

```typescript
import { directconnectDirectConnectGatewayAssociation } from '@cdktn/provider-awscc'

directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource"></a>

```typescript
import { directconnectDirectConnectGatewayAssociation } from '@cdktn/provider-awscc'

directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport"></a>

```typescript
import { directconnectDirectConnectGatewayAssociation } from '@cdktn/provider-awscc'

directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DirectconnectDirectConnectGatewayAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectconnectDirectConnectGatewayAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectconnectDirectConnectGatewayAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectDirectConnectGatewayAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArnInput">acceptDirectConnectGatewayAssociationProposalRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGatewayInput">allowedPrefixesToDirectConnectGatewayInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayIdInput">associatedGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayIdInput">directConnectGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArn">acceptDirectConnectGatewayAssociationProposalRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway">allowedPrefixesToDirectConnectGateway</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayId">associatedGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `acceptDirectConnectGatewayAssociationProposalRoleArnInput`<sup>Optional</sup> <a name="acceptDirectConnectGatewayAssociationProposalRoleArnInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArnInput"></a>

```typescript
public readonly acceptDirectConnectGatewayAssociationProposalRoleArnInput: string;
```

- *Type:* string

---

##### `allowedPrefixesToDirectConnectGatewayInput`<sup>Optional</sup> <a name="allowedPrefixesToDirectConnectGatewayInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGatewayInput"></a>

```typescript
public readonly allowedPrefixesToDirectConnectGatewayInput: string[];
```

- *Type:* string[]

---

##### `associatedGatewayIdInput`<sup>Optional</sup> <a name="associatedGatewayIdInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayIdInput"></a>

```typescript
public readonly associatedGatewayIdInput: string;
```

- *Type:* string

---

##### `directConnectGatewayIdInput`<sup>Optional</sup> <a name="directConnectGatewayIdInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayIdInput"></a>

```typescript
public readonly directConnectGatewayIdInput: string;
```

- *Type:* string

---

##### `acceptDirectConnectGatewayAssociationProposalRoleArn`<sup>Required</sup> <a name="acceptDirectConnectGatewayAssociationProposalRoleArn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```typescript
public readonly acceptDirectConnectGatewayAssociationProposalRoleArn: string;
```

- *Type:* string

---

##### `allowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="allowedPrefixesToDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway"></a>

```typescript
public readonly allowedPrefixesToDirectConnectGateway: string[];
```

- *Type:* string[]

---

##### `associatedGatewayId`<sup>Required</sup> <a name="associatedGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayId"></a>

```typescript
public readonly associatedGatewayId: string;
```

- *Type:* string

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayId"></a>

```typescript
public readonly directConnectGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectDirectConnectGatewayAssociationConfig <a name="DirectconnectDirectConnectGatewayAssociationConfig" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.Initializer"></a>

```typescript
import { directconnectDirectConnectGatewayAssociation } from '@cdktn/provider-awscc'

const directconnectDirectConnectGatewayAssociationConfig: directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.associatedGatewayId">associatedGatewayId</a></code> | <code>string</code> | The ID or ARN of the virtual private gateway or transit gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>string</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.acceptDirectConnectGatewayAssociationProposalRoleArn">acceptDirectConnectGatewayAssociationProposalRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.allowedPrefixesToDirectConnectGateway">allowedPrefixesToDirectConnectGateway</a></code> | <code>string[]</code> | The Amazon VPC prefixes to advertise to the Direct Connect gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associatedGatewayId`<sup>Required</sup> <a name="associatedGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.associatedGatewayId"></a>

```typescript
public readonly associatedGatewayId: string;
```

- *Type:* string

The ID or ARN of the virtual private gateway or transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#associated_gateway_id DirectconnectDirectConnectGatewayAssociation#associated_gateway_id}

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.directConnectGatewayId"></a>

```typescript
public readonly directConnectGatewayId: string;
```

- *Type:* string

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#direct_connect_gateway_id DirectconnectDirectConnectGatewayAssociation#direct_connect_gateway_id}

---

##### `acceptDirectConnectGatewayAssociationProposalRoleArn`<sup>Optional</sup> <a name="acceptDirectConnectGatewayAssociationProposalRoleArn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.acceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```typescript
public readonly acceptDirectConnectGatewayAssociationProposalRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#accept_direct_connect_gateway_association_proposal_role_arn DirectconnectDirectConnectGatewayAssociation#accept_direct_connect_gateway_association_proposal_role_arn}

---

##### `allowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="allowedPrefixesToDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.allowedPrefixesToDirectConnectGateway"></a>

```typescript
public readonly allowedPrefixesToDirectConnectGateway: string[];
```

- *Type:* string[]

The Amazon VPC prefixes to advertise to the Direct Connect gateway.

This parameter is required when you create an association to a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#allowed_prefixes_to_direct_connect_gateway DirectconnectDirectConnectGatewayAssociation#allowed_prefixes_to_direct_connect_gateway}

---



