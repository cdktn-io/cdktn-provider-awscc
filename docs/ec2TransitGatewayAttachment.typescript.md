# `ec2TransitGatewayAttachment` Submodule <a name="`ec2TransitGatewayAttachment` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayAttachment <a name="Ec2TransitGatewayAttachment" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment awscc_ec2_transit_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment(scope: Construct, id: string, config: Ec2TransitGatewayAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig">Ec2TransitGatewayAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig">Ec2TransitGatewayAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.putOptions"></a>

```typescript
public putOptions(value: Ec2TransitGatewayAttachmentOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions">Ec2TransitGatewayAttachmentOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2TransitGatewayAttachmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags">Ec2TransitGatewayAttachmentTags</a>[]

---

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isConstruct"></a>

```typescript
import { ec2TransitGatewayAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2TransitGatewayAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference">Ec2TransitGatewayAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList">Ec2TransitGatewayAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.optionsInput">optionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions">Ec2TransitGatewayAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags">Ec2TransitGatewayAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.options"></a>

```typescript
public readonly options: Ec2TransitGatewayAttachmentOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference">Ec2TransitGatewayAttachmentOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.tags"></a>

```typescript
public readonly tags: Ec2TransitGatewayAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList">Ec2TransitGatewayAttachmentTagsList</a>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | Ec2TransitGatewayAttachmentOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions">Ec2TransitGatewayAttachmentOptions</a>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2TransitGatewayAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags">Ec2TransitGatewayAttachmentTags</a>[]

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayAttachmentConfig <a name="Ec2TransitGatewayAttachmentConfig" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachment } from '@cdktn/provider-awscc'

const ec2TransitGatewayAttachmentConfig: ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#subnet_ids Ec2TransitGatewayAttachment#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#transit_gateway_id Ec2TransitGatewayAttachment#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#vpc_id Ec2TransitGatewayAttachment#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions">Ec2TransitGatewayAttachmentOptions</a></code> | The options for the transit gateway vpc attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags">Ec2TransitGatewayAttachmentTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#tags Ec2TransitGatewayAttachment#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#subnet_ids Ec2TransitGatewayAttachment#subnet_ids}.

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#transit_gateway_id Ec2TransitGatewayAttachment#transit_gateway_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#vpc_id Ec2TransitGatewayAttachment#vpc_id}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.options"></a>

```typescript
public readonly options: Ec2TransitGatewayAttachmentOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions">Ec2TransitGatewayAttachmentOptions</a>

The options for the transit gateway vpc attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#options Ec2TransitGatewayAttachment#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2TransitGatewayAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags">Ec2TransitGatewayAttachmentTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#tags Ec2TransitGatewayAttachment#tags}.

---

### Ec2TransitGatewayAttachmentOptions <a name="Ec2TransitGatewayAttachmentOptions" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachment } from '@cdktn/provider-awscc'

const ec2TransitGatewayAttachmentOptions: ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions.property.applianceModeSupport">applianceModeSupport</a></code> | <code>string</code> | Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions.property.dnsSupport">dnsSupport</a></code> | <code>string</code> | Indicates whether to enable DNS Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions.property.ipv6Support">ipv6Support</a></code> | <code>string</code> | Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions.property.securityGroupReferencingSupport">securityGroupReferencingSupport</a></code> | <code>string</code> | Indicates whether to enable Security Group referencing support for Vpc Attachment. Valid Values: enable \| disable. |

---

##### `applianceModeSupport`<sup>Optional</sup> <a name="applianceModeSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions.property.applianceModeSupport"></a>

```typescript
public readonly applianceModeSupport: string;
```

- *Type:* string

Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#appliance_mode_support Ec2TransitGatewayAttachment#appliance_mode_support}

---

##### `dnsSupport`<sup>Optional</sup> <a name="dnsSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: string;
```

- *Type:* string

Indicates whether to enable DNS Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#dns_support Ec2TransitGatewayAttachment#dns_support}

---

##### `ipv6Support`<sup>Optional</sup> <a name="ipv6Support" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions.property.ipv6Support"></a>

```typescript
public readonly ipv6Support: string;
```

- *Type:* string

Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#ipv_6_support Ec2TransitGatewayAttachment#ipv_6_support}

---

##### `securityGroupReferencingSupport`<sup>Optional</sup> <a name="securityGroupReferencingSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions.property.securityGroupReferencingSupport"></a>

```typescript
public readonly securityGroupReferencingSupport: string;
```

- *Type:* string

Indicates whether to enable Security Group referencing support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#security_group_referencing_support Ec2TransitGatewayAttachment#security_group_referencing_support}

---

### Ec2TransitGatewayAttachmentTags <a name="Ec2TransitGatewayAttachmentTags" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachment } from '@cdktn/provider-awscc'

const ec2TransitGatewayAttachmentTags: ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#key Ec2TransitGatewayAttachment#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#value Ec2TransitGatewayAttachment#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#key Ec2TransitGatewayAttachment#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_transit_gateway_attachment#value Ec2TransitGatewayAttachment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayAttachmentOptionsOutputReference <a name="Ec2TransitGatewayAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.resetApplianceModeSupport">resetApplianceModeSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.resetDnsSupport">resetDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.resetIpv6Support">resetIpv6Support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport">resetSecurityGroupReferencingSupport</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplianceModeSupport` <a name="resetApplianceModeSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.resetApplianceModeSupport"></a>

```typescript
public resetApplianceModeSupport(): void
```

##### `resetDnsSupport` <a name="resetDnsSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.resetDnsSupport"></a>

```typescript
public resetDnsSupport(): void
```

##### `resetIpv6Support` <a name="resetIpv6Support" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.resetIpv6Support"></a>

```typescript
public resetIpv6Support(): void
```

##### `resetSecurityGroupReferencingSupport` <a name="resetSecurityGroupReferencingSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport"></a>

```typescript
public resetSecurityGroupReferencingSupport(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.applianceModeSupportInput">applianceModeSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.dnsSupportInput">dnsSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.ipv6SupportInput">ipv6SupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput">securityGroupReferencingSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.applianceModeSupport">applianceModeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.dnsSupport">dnsSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.ipv6Support">ipv6Support</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.securityGroupReferencingSupport">securityGroupReferencingSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions">Ec2TransitGatewayAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applianceModeSupportInput`<sup>Optional</sup> <a name="applianceModeSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.applianceModeSupportInput"></a>

```typescript
public readonly applianceModeSupportInput: string;
```

- *Type:* string

---

##### `dnsSupportInput`<sup>Optional</sup> <a name="dnsSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.dnsSupportInput"></a>

```typescript
public readonly dnsSupportInput: string;
```

- *Type:* string

---

##### `ipv6SupportInput`<sup>Optional</sup> <a name="ipv6SupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.ipv6SupportInput"></a>

```typescript
public readonly ipv6SupportInput: string;
```

- *Type:* string

---

##### `securityGroupReferencingSupportInput`<sup>Optional</sup> <a name="securityGroupReferencingSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput"></a>

```typescript
public readonly securityGroupReferencingSupportInput: string;
```

- *Type:* string

---

##### `applianceModeSupport`<sup>Required</sup> <a name="applianceModeSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.applianceModeSupport"></a>

```typescript
public readonly applianceModeSupport: string;
```

- *Type:* string

---

##### `dnsSupport`<sup>Required</sup> <a name="dnsSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: string;
```

- *Type:* string

---

##### `ipv6Support`<sup>Required</sup> <a name="ipv6Support" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.ipv6Support"></a>

```typescript
public readonly ipv6Support: string;
```

- *Type:* string

---

##### `securityGroupReferencingSupport`<sup>Required</sup> <a name="securityGroupReferencingSupport" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.securityGroupReferencingSupport"></a>

```typescript
public readonly securityGroupReferencingSupport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayAttachmentOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentOptions">Ec2TransitGatewayAttachmentOptions</a>

---


### Ec2TransitGatewayAttachmentTagsList <a name="Ec2TransitGatewayAttachmentTagsList" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.get"></a>

```typescript
public get(index: number): Ec2TransitGatewayAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags">Ec2TransitGatewayAttachmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags">Ec2TransitGatewayAttachmentTags</a>[]

---


### Ec2TransitGatewayAttachmentTagsOutputReference <a name="Ec2TransitGatewayAttachmentTagsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { ec2TransitGatewayAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags">Ec2TransitGatewayAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayAttachmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayAttachment.Ec2TransitGatewayAttachmentTags">Ec2TransitGatewayAttachmentTags</a>

---



