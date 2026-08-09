# `ec2TransitGatewayVpcAttachment` Submodule <a name="`ec2TransitGatewayVpcAttachment` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayVpcAttachment <a name="Ec2TransitGatewayVpcAttachment" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment awscc_ec2_transit_gateway_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer"></a>

```typescript
import { ec2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig">Ec2TransitGatewayVpcAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig">Ec2TransitGatewayVpcAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetAddSubnetIds">resetAddSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetRemoveSubnetIds">resetRemoveSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putOptions"></a>

```typescript
public putOptions(value: Ec2TransitGatewayVpcAttachmentOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2TransitGatewayVpcAttachmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]

---

##### `resetAddSubnetIds` <a name="resetAddSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetAddSubnetIds"></a>

```typescript
public resetAddSubnetIds(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetRemoveSubnetIds` <a name="resetRemoveSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetRemoveSubnetIds"></a>

```typescript
public resetRemoveSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayVpcAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct"></a>

```typescript
import { ec2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2TransitGatewayVpcAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayVpcAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayVpcAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayVpcAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference">Ec2TransitGatewayVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList">Ec2TransitGatewayVpcAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayVpcAttachmentId">transitGatewayVpcAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.addSubnetIdsInput">addSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.optionsInput">optionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.removeSubnetIdsInput">removeSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.addSubnetIds">addSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.removeSubnetIds">removeSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.options"></a>

```typescript
public readonly options: Ec2TransitGatewayVpcAttachmentOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference">Ec2TransitGatewayVpcAttachmentOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tags"></a>

```typescript
public readonly tags: Ec2TransitGatewayVpcAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList">Ec2TransitGatewayVpcAttachmentTagsList</a>

---

##### `transitGatewayVpcAttachmentId`<sup>Required</sup> <a name="transitGatewayVpcAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayVpcAttachmentId"></a>

```typescript
public readonly transitGatewayVpcAttachmentId: string;
```

- *Type:* string

---

##### `addSubnetIdsInput`<sup>Optional</sup> <a name="addSubnetIdsInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.addSubnetIdsInput"></a>

```typescript
public readonly addSubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | Ec2TransitGatewayVpcAttachmentOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a>

---

##### `removeSubnetIdsInput`<sup>Optional</sup> <a name="removeSubnetIdsInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.removeSubnetIdsInput"></a>

```typescript
public readonly removeSubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2TransitGatewayVpcAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `addSubnetIds`<sup>Required</sup> <a name="addSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.addSubnetIds"></a>

```typescript
public readonly addSubnetIds: string[];
```

- *Type:* string[]

---

##### `removeSubnetIds`<sup>Required</sup> <a name="removeSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.removeSubnetIds"></a>

```typescript
public readonly removeSubnetIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayVpcAttachmentConfig <a name="Ec2TransitGatewayVpcAttachmentConfig" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

const ec2TransitGatewayVpcAttachmentConfig: ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.addSubnetIds">addSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#add_subnet_ids Ec2TransitGatewayVpcAttachment#add_subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a></code> | The options for the transit gateway vpc attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.removeSubnetIds">removeSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#remove_subnet_ids Ec2TransitGatewayVpcAttachment#remove_subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#tags Ec2TransitGatewayVpcAttachment#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}.

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}.

---

##### `addSubnetIds`<sup>Optional</sup> <a name="addSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.addSubnetIds"></a>

```typescript
public readonly addSubnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#add_subnet_ids Ec2TransitGatewayVpcAttachment#add_subnet_ids}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.options"></a>

```typescript
public readonly options: Ec2TransitGatewayVpcAttachmentOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a>

The options for the transit gateway vpc attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#options Ec2TransitGatewayVpcAttachment#options}

---

##### `removeSubnetIds`<sup>Optional</sup> <a name="removeSubnetIds" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.removeSubnetIds"></a>

```typescript
public readonly removeSubnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#remove_subnet_ids Ec2TransitGatewayVpcAttachment#remove_subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2TransitGatewayVpcAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#tags Ec2TransitGatewayVpcAttachment#tags}.

---

### Ec2TransitGatewayVpcAttachmentOptions <a name="Ec2TransitGatewayVpcAttachmentOptions" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.Initializer"></a>

```typescript
import { ec2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

const ec2TransitGatewayVpcAttachmentOptions: ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.applianceModeSupport">applianceModeSupport</a></code> | <code>string</code> | Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.dnsSupport">dnsSupport</a></code> | <code>string</code> | Indicates whether to enable DNS Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.ipv6Support">ipv6Support</a></code> | <code>string</code> | Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.securityGroupReferencingSupport">securityGroupReferencingSupport</a></code> | <code>string</code> | Indicates whether to enable Security Group referencing support for Vpc Attachment. Valid values: enable \| disable. |

---

##### `applianceModeSupport`<sup>Optional</sup> <a name="applianceModeSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.applianceModeSupport"></a>

```typescript
public readonly applianceModeSupport: string;
```

- *Type:* string

Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}

---

##### `dnsSupport`<sup>Optional</sup> <a name="dnsSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: string;
```

- *Type:* string

Indicates whether to enable DNS Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#dns_support Ec2TransitGatewayVpcAttachment#dns_support}

---

##### `ipv6Support`<sup>Optional</sup> <a name="ipv6Support" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.ipv6Support"></a>

```typescript
public readonly ipv6Support: string;
```

- *Type:* string

Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#ipv_6_support Ec2TransitGatewayVpcAttachment#ipv_6_support}

---

##### `securityGroupReferencingSupport`<sup>Optional</sup> <a name="securityGroupReferencingSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions.property.securityGroupReferencingSupport"></a>

```typescript
public readonly securityGroupReferencingSupport: string;
```

- *Type:* string

Indicates whether to enable Security Group referencing support for Vpc Attachment. Valid values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#security_group_referencing_support Ec2TransitGatewayVpcAttachment#security_group_referencing_support}

---

### Ec2TransitGatewayVpcAttachmentTags <a name="Ec2TransitGatewayVpcAttachmentTags" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags.Initializer"></a>

```typescript
import { ec2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

const ec2TransitGatewayVpcAttachmentTags: ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#key Ec2TransitGatewayVpcAttachment#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#value Ec2TransitGatewayVpcAttachment#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#key Ec2TransitGatewayVpcAttachment#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_vpc_attachment#value Ec2TransitGatewayVpcAttachment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayVpcAttachmentOptionsOutputReference <a name="Ec2TransitGatewayVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer"></a>

```typescript
import { ec2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetApplianceModeSupport">resetApplianceModeSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetDnsSupport">resetDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetIpv6Support">resetIpv6Support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport">resetSecurityGroupReferencingSupport</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplianceModeSupport` <a name="resetApplianceModeSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetApplianceModeSupport"></a>

```typescript
public resetApplianceModeSupport(): void
```

##### `resetDnsSupport` <a name="resetDnsSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetDnsSupport"></a>

```typescript
public resetDnsSupport(): void
```

##### `resetIpv6Support` <a name="resetIpv6Support" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetIpv6Support"></a>

```typescript
public resetIpv6Support(): void
```

##### `resetSecurityGroupReferencingSupport` <a name="resetSecurityGroupReferencingSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport"></a>

```typescript
public resetSecurityGroupReferencingSupport(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput">applianceModeSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.dnsSupportInput">dnsSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.ipv6SupportInput">ipv6SupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput">securityGroupReferencingSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.applianceModeSupport">applianceModeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.dnsSupport">dnsSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.ipv6Support">ipv6Support</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport">securityGroupReferencingSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applianceModeSupportInput`<sup>Optional</sup> <a name="applianceModeSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput"></a>

```typescript
public readonly applianceModeSupportInput: string;
```

- *Type:* string

---

##### `dnsSupportInput`<sup>Optional</sup> <a name="dnsSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.dnsSupportInput"></a>

```typescript
public readonly dnsSupportInput: string;
```

- *Type:* string

---

##### `ipv6SupportInput`<sup>Optional</sup> <a name="ipv6SupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.ipv6SupportInput"></a>

```typescript
public readonly ipv6SupportInput: string;
```

- *Type:* string

---

##### `securityGroupReferencingSupportInput`<sup>Optional</sup> <a name="securityGroupReferencingSupportInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput"></a>

```typescript
public readonly securityGroupReferencingSupportInput: string;
```

- *Type:* string

---

##### `applianceModeSupport`<sup>Required</sup> <a name="applianceModeSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.applianceModeSupport"></a>

```typescript
public readonly applianceModeSupport: string;
```

- *Type:* string

---

##### `dnsSupport`<sup>Required</sup> <a name="dnsSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: string;
```

- *Type:* string

---

##### `ipv6Support`<sup>Required</sup> <a name="ipv6Support" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.ipv6Support"></a>

```typescript
public readonly ipv6Support: string;
```

- *Type:* string

---

##### `securityGroupReferencingSupport`<sup>Required</sup> <a name="securityGroupReferencingSupport" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport"></a>

```typescript
public readonly securityGroupReferencingSupport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayVpcAttachmentOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentOptions">Ec2TransitGatewayVpcAttachmentOptions</a>

---


### Ec2TransitGatewayVpcAttachmentTagsList <a name="Ec2TransitGatewayVpcAttachmentTagsList" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer"></a>

```typescript
import { ec2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.get"></a>

```typescript
public get(index: number): Ec2TransitGatewayVpcAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayVpcAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>[]

---


### Ec2TransitGatewayVpcAttachmentTagsOutputReference <a name="Ec2TransitGatewayVpcAttachmentTagsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { ec2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayVpcAttachmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentTags">Ec2TransitGatewayVpcAttachmentTags</a>

---



