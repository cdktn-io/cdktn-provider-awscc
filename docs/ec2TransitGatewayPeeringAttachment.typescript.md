# `ec2TransitGatewayPeeringAttachment` Submodule <a name="`ec2TransitGatewayPeeringAttachment` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPeeringAttachment <a name="Ec2TransitGatewayPeeringAttachment" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_peering_attachment awscc_ec2_transit_gateway_peering_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig">Ec2TransitGatewayPeeringAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig">Ec2TransitGatewayPeeringAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2TransitGatewayPeeringAttachmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2TransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayPeeringAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayPeeringAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_peering_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayPeeringAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference">Ec2TransitGatewayPeeringAttachmentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList">Ec2TransitGatewayPeeringAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountIdInput">peerAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegionInput">peerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayIdInput">peerTransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountId">peerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayId">peerTransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.status"></a>

```typescript
public readonly status: Ec2TransitGatewayPeeringAttachmentStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference">Ec2TransitGatewayPeeringAttachmentStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tags"></a>

```typescript
public readonly tags: Ec2TransitGatewayPeeringAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList">Ec2TransitGatewayPeeringAttachmentTagsList</a>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `peerAccountIdInput`<sup>Optional</sup> <a name="peerAccountIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountIdInput"></a>

```typescript
public readonly peerAccountIdInput: string;
```

- *Type:* string

---

##### `peerRegionInput`<sup>Optional</sup> <a name="peerRegionInput" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegionInput"></a>

```typescript
public readonly peerRegionInput: string;
```

- *Type:* string

---

##### `peerTransitGatewayIdInput`<sup>Optional</sup> <a name="peerTransitGatewayIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayIdInput"></a>

```typescript
public readonly peerTransitGatewayIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2TransitGatewayPeeringAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>[]

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `peerAccountId`<sup>Required</sup> <a name="peerAccountId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountId"></a>

```typescript
public readonly peerAccountId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `peerTransitGatewayId`<sup>Required</sup> <a name="peerTransitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayId"></a>

```typescript
public readonly peerTransitGatewayId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPeeringAttachmentConfig <a name="Ec2TransitGatewayPeeringAttachmentConfig" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

const ec2TransitGatewayPeeringAttachmentConfig: ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerAccountId">peerAccountId</a></code> | <code>string</code> | The ID of the peer account. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerRegion">peerRegion</a></code> | <code>string</code> | Peer Region. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerTransitGatewayId">peerTransitGatewayId</a></code> | <code>string</code> | The ID of the peer transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | The ID of the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>[]</code> | The tags for the transit gateway peering attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `peerAccountId`<sup>Required</sup> <a name="peerAccountId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerAccountId"></a>

```typescript
public readonly peerAccountId: string;
```

- *Type:* string

The ID of the peer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

Peer Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}

---

##### `peerTransitGatewayId`<sup>Required</sup> <a name="peerTransitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerTransitGatewayId"></a>

```typescript
public readonly peerTransitGatewayId: string;
```

- *Type:* string

The ID of the peer transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

The ID of the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2TransitGatewayPeeringAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>[]

The tags for the transit gateway peering attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}

---

### Ec2TransitGatewayPeeringAttachmentStatus <a name="Ec2TransitGatewayPeeringAttachmentStatus" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatus.Initializer"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

const ec2TransitGatewayPeeringAttachmentStatus: ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatus = { ... }
```


### Ec2TransitGatewayPeeringAttachmentTags <a name="Ec2TransitGatewayPeeringAttachmentTags" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags.Initializer"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

const ec2TransitGatewayPeeringAttachmentTags: ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags.property.value">value</a></code> | <code>string</code> | The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_peering_attachment#key Ec2TransitGatewayPeeringAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_peering_attachment#value Ec2TransitGatewayPeeringAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayPeeringAttachmentStatusOutputReference <a name="Ec2TransitGatewayPeeringAttachmentStatusOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatus">Ec2TransitGatewayPeeringAttachmentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2TransitGatewayPeeringAttachmentStatus;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentStatus">Ec2TransitGatewayPeeringAttachmentStatus</a>

---


### Ec2TransitGatewayPeeringAttachmentTagsList <a name="Ec2TransitGatewayPeeringAttachmentTagsList" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.get"></a>

```typescript
public get(index: number): Ec2TransitGatewayPeeringAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayPeeringAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>[]

---


### Ec2TransitGatewayPeeringAttachmentTagsOutputReference <a name="Ec2TransitGatewayPeeringAttachmentTagsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayPeeringAttachmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentTags">Ec2TransitGatewayPeeringAttachmentTags</a>

---



