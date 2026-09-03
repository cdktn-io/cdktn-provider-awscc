# `ec2LocalGatewayVirtualInterface` Submodule <a name="`ec2LocalGatewayVirtualInterface` Submodule" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayVirtualInterface <a name="Ec2LocalGatewayVirtualInterface" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface awscc_ec2_local_gateway_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer"></a>

```typescript
import { ec2LocalGatewayVirtualInterface } from '@cdktn/provider-awscc'

new ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface(scope: Construct, id: string, config: Ec2LocalGatewayVirtualInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig">Ec2LocalGatewayVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig">Ec2LocalGatewayVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsn">resetPeerBgpAsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsnExtended">resetPeerBgpAsnExtended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2LocalGatewayVirtualInterfaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]

---

##### `resetPeerBgpAsn` <a name="resetPeerBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsn"></a>

```typescript
public resetPeerBgpAsn(): void
```

##### `resetPeerBgpAsnExtended` <a name="resetPeerBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsnExtended"></a>

```typescript
public resetPeerBgpAsnExtended(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct"></a>

```typescript
import { ec2LocalGatewayVirtualInterface } from '@cdktn/provider-awscc'

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement"></a>

```typescript
import { ec2LocalGatewayVirtualInterface } from '@cdktn/provider-awscc'

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource"></a>

```typescript
import { ec2LocalGatewayVirtualInterface } from '@cdktn/provider-awscc'

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport"></a>

```typescript
import { ec2LocalGatewayVirtualInterface } from '@cdktn/provider-awscc'

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2LocalGatewayVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2LocalGatewayVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.configurationState">configurationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localBgpAsn">localBgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceId">localGatewayVirtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList">Ec2LocalGatewayVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddressInput">localAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupIdInput">localGatewayVirtualInterfaceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagIdInput">outpostLagIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddressInput">peerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtendedInput">peerBgpAsnExtendedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnInput">peerBgpAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddress">localAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId">localGatewayVirtualInterfaceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagId">outpostLagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsn">peerBgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtended">peerBgpAsnExtended</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configurationState`<sup>Required</sup> <a name="configurationState" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.configurationState"></a>

```typescript
public readonly configurationState: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localBgpAsn`<sup>Required</sup> <a name="localBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localBgpAsn"></a>

```typescript
public readonly localBgpAsn: number;
```

- *Type:* number

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

---

##### `localGatewayVirtualInterfaceId`<sup>Required</sup> <a name="localGatewayVirtualInterfaceId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceId"></a>

```typescript
public readonly localGatewayVirtualInterfaceId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tags"></a>

```typescript
public readonly tags: Ec2LocalGatewayVirtualInterfaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList">Ec2LocalGatewayVirtualInterfaceTagsList</a>

---

##### `localAddressInput`<sup>Optional</sup> <a name="localAddressInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddressInput"></a>

```typescript
public readonly localAddressInput: string;
```

- *Type:* string

---

##### `localGatewayVirtualInterfaceGroupIdInput`<sup>Optional</sup> <a name="localGatewayVirtualInterfaceGroupIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupIdInput"></a>

```typescript
public readonly localGatewayVirtualInterfaceGroupIdInput: string;
```

- *Type:* string

---

##### `outpostLagIdInput`<sup>Optional</sup> <a name="outpostLagIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagIdInput"></a>

```typescript
public readonly outpostLagIdInput: string;
```

- *Type:* string

---

##### `peerAddressInput`<sup>Optional</sup> <a name="peerAddressInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddressInput"></a>

```typescript
public readonly peerAddressInput: string;
```

- *Type:* string

---

##### `peerBgpAsnExtendedInput`<sup>Optional</sup> <a name="peerBgpAsnExtendedInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtendedInput"></a>

```typescript
public readonly peerBgpAsnExtendedInput: number;
```

- *Type:* number

---

##### `peerBgpAsnInput`<sup>Optional</sup> <a name="peerBgpAsnInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnInput"></a>

```typescript
public readonly peerBgpAsnInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2LocalGatewayVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `localAddress`<sup>Required</sup> <a name="localAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddress"></a>

```typescript
public readonly localAddress: string;
```

- *Type:* string

---

##### `localGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="localGatewayVirtualInterfaceGroupId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId"></a>

```typescript
public readonly localGatewayVirtualInterfaceGroupId: string;
```

- *Type:* string

---

##### `outpostLagId`<sup>Required</sup> <a name="outpostLagId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagId"></a>

```typescript
public readonly outpostLagId: string;
```

- *Type:* string

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `peerBgpAsn`<sup>Required</sup> <a name="peerBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsn"></a>

```typescript
public readonly peerBgpAsn: number;
```

- *Type:* number

---

##### `peerBgpAsnExtended`<sup>Required</sup> <a name="peerBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtended"></a>

```typescript
public readonly peerBgpAsnExtended: number;
```

- *Type:* number

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayVirtualInterfaceConfig <a name="Ec2LocalGatewayVirtualInterfaceConfig" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.Initializer"></a>

```typescript
import { ec2LocalGatewayVirtualInterface } from '@cdktn/provider-awscc'

const ec2LocalGatewayVirtualInterfaceConfig: ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localAddress">localAddress</a></code> | <code>string</code> | The local address. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localGatewayVirtualInterfaceGroupId">localGatewayVirtualInterfaceGroupId</a></code> | <code>string</code> | The ID of the virtual interface group. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.outpostLagId">outpostLagId</a></code> | <code>string</code> | The Outpost LAG ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerAddress">peerAddress</a></code> | <code>string</code> | The peer address. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>number</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsn">peerBgpAsn</a></code> | <code>number</code> | The peer BGP ASN. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsnExtended">peerBgpAsnExtended</a></code> | <code>number</code> | The extended 32-bit ASN of the BGP peer for use with larger ASN values. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `localAddress`<sup>Required</sup> <a name="localAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localAddress"></a>

```typescript
public readonly localAddress: string;
```

- *Type:* string

The local address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#local_address Ec2LocalGatewayVirtualInterface#local_address}

---

##### `localGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="localGatewayVirtualInterfaceGroupId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localGatewayVirtualInterfaceGroupId"></a>

```typescript
public readonly localGatewayVirtualInterfaceGroupId: string;
```

- *Type:* string

The ID of the virtual interface group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#local_gateway_virtual_interface_group_id Ec2LocalGatewayVirtualInterface#local_gateway_virtual_interface_group_id}

---

##### `outpostLagId`<sup>Required</sup> <a name="outpostLagId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.outpostLagId"></a>

```typescript
public readonly outpostLagId: string;
```

- *Type:* string

The Outpost LAG ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#outpost_lag_id Ec2LocalGatewayVirtualInterface#outpost_lag_id}

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

The peer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#peer_address Ec2LocalGatewayVirtualInterface#peer_address}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#vlan Ec2LocalGatewayVirtualInterface#vlan}

---

##### `peerBgpAsn`<sup>Optional</sup> <a name="peerBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsn"></a>

```typescript
public readonly peerBgpAsn: number;
```

- *Type:* number

The peer BGP ASN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn Ec2LocalGatewayVirtualInterface#peer_bgp_asn}

---

##### `peerBgpAsnExtended`<sup>Optional</sup> <a name="peerBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsnExtended"></a>

```typescript
public readonly peerBgpAsnExtended: number;
```

- *Type:* number

The extended 32-bit ASN of the BGP peer for use with larger ASN values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn_extended Ec2LocalGatewayVirtualInterface#peer_bgp_asn_extended}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2LocalGatewayVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#tags Ec2LocalGatewayVirtualInterface#tags}

---

### Ec2LocalGatewayVirtualInterfaceTags <a name="Ec2LocalGatewayVirtualInterfaceTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.Initializer"></a>

```typescript
import { ec2LocalGatewayVirtualInterface } from '@cdktn/provider-awscc'

const ec2LocalGatewayVirtualInterfaceTags: ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#key Ec2LocalGatewayVirtualInterface#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#value Ec2LocalGatewayVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayVirtualInterfaceTagsList <a name="Ec2LocalGatewayVirtualInterfaceTagsList" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer"></a>

```typescript
import { ec2LocalGatewayVirtualInterface } from '@cdktn/provider-awscc'

new ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get"></a>

```typescript
public get(index: number): Ec2LocalGatewayVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2LocalGatewayVirtualInterfaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]

---


### Ec2LocalGatewayVirtualInterfaceTagsOutputReference <a name="Ec2LocalGatewayVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer"></a>

```typescript
import { ec2LocalGatewayVirtualInterface } from '@cdktn/provider-awscc'

new ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2LocalGatewayVirtualInterfaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>

---



