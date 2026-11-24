# `ec2TransitGatewayNetworkFunctionAttachment` Submodule <a name="`ec2TransitGatewayNetworkFunctionAttachment` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayNetworkFunctionAttachment <a name="Ec2TransitGatewayNetworkFunctionAttachment" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment awscc_ec2_transit_gateway_network_function_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer"></a>

```typescript
import { ec2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment(scope: Construct, id: string, config: Ec2TransitGatewayNetworkFunctionAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig">Ec2TransitGatewayNetworkFunctionAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig">Ec2TransitGatewayNetworkFunctionAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZoneIds">resetAvailabilityZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2TransitGatewayNetworkFunctionAttachmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]

---

##### `resetAvailabilityZoneIds` <a name="resetAvailabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZoneIds"></a>

```typescript
public resetAvailabilityZoneIds(): void
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct"></a>

```typescript
import { ec2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayNetworkFunctionAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayNetworkFunctionAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayNetworkFunctionAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList">Ec2TransitGatewayNetworkFunctionAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIdsInput">availabilityZoneIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds">availabilityZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tags"></a>

```typescript
public readonly tags: Ec2TransitGatewayNetworkFunctionAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList">Ec2TransitGatewayNetworkFunctionAttachmentTagsList</a>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `availabilityZoneIdsInput`<sup>Optional</sup> <a name="availabilityZoneIdsInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIdsInput"></a>

```typescript
public readonly availabilityZoneIdsInput: string[];
```

- *Type:* string[]

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2TransitGatewayNetworkFunctionAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `availabilityZoneIds`<sup>Required</sup> <a name="availabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds"></a>

```typescript
public readonly availabilityZoneIds: string[];
```

- *Type:* string[]

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayNetworkFunctionAttachmentConfig <a name="Ec2TransitGatewayNetworkFunctionAttachmentConfig" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

const ec2TransitGatewayNetworkFunctionAttachmentConfig: ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | The ID of the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZoneIds">availabilityZoneIds</a></code> | <code>string[]</code> | The Availability Zone IDs for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | The Availability Zones for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the network function service. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]</code> | The tags for the attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

The ID of the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#transit_gateway_id Ec2TransitGatewayNetworkFunctionAttachment#transit_gateway_id}

---

##### `availabilityZoneIds`<sup>Optional</sup> <a name="availabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZoneIds"></a>

```typescript
public readonly availabilityZoneIds: string[];
```

- *Type:* string[]

The Availability Zone IDs for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#availability_zone_ids Ec2TransitGatewayNetworkFunctionAttachment#availability_zone_ids}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

The Availability Zones for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#availability_zones Ec2TransitGatewayNetworkFunctionAttachment#availability_zones}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the network function service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#service_name Ec2TransitGatewayNetworkFunctionAttachment#service_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2TransitGatewayNetworkFunctionAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]

The tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#tags Ec2TransitGatewayNetworkFunctionAttachment#tags}

---

### Ec2TransitGatewayNetworkFunctionAttachmentTags <a name="Ec2TransitGatewayNetworkFunctionAttachmentTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.Initializer"></a>

```typescript
import { ec2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

const ec2TransitGatewayNetworkFunctionAttachmentTags: ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#key Ec2TransitGatewayNetworkFunctionAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#value Ec2TransitGatewayNetworkFunctionAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayNetworkFunctionAttachmentTagsList <a name="Ec2TransitGatewayNetworkFunctionAttachmentTagsList" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer"></a>

```typescript
import { ec2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get"></a>

```typescript
public get(index: number): Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayNetworkFunctionAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>[]

---


### Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference <a name="Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { ec2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

new ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TransitGatewayNetworkFunctionAttachmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>

---



