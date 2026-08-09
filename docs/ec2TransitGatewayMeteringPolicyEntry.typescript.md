# `ec2TransitGatewayMeteringPolicyEntry` Submodule <a name="`ec2TransitGatewayMeteringPolicyEntry` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMeteringPolicyEntry <a name="Ec2TransitGatewayMeteringPolicyEntry" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry awscc_ec2_transit_gateway_metering_policy_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

new ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry(scope: Construct, id: string, config: Ec2TransitGatewayMeteringPolicyEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig">Ec2TransitGatewayMeteringPolicyEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig">Ec2TransitGatewayMeteringPolicyEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationCidrBlock">resetDestinationCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentId">resetDestinationTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentType">resetDestinationTransitGatewayAttachmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceCidrBlock">resetSourceCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentId">resetSourceTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentType">resetSourceTransitGatewayAttachmentType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDestinationCidrBlock` <a name="resetDestinationCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationCidrBlock"></a>

```typescript
public resetDestinationCidrBlock(): void
```

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationPortRange"></a>

```typescript
public resetDestinationPortRange(): void
```

##### `resetDestinationTransitGatewayAttachmentId` <a name="resetDestinationTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentId"></a>

```typescript
public resetDestinationTransitGatewayAttachmentId(): void
```

##### `resetDestinationTransitGatewayAttachmentType` <a name="resetDestinationTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetDestinationTransitGatewayAttachmentType"></a>

```typescript
public resetDestinationTransitGatewayAttachmentType(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSourceCidrBlock` <a name="resetSourceCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceCidrBlock"></a>

```typescript
public resetSourceCidrBlock(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```

##### `resetSourceTransitGatewayAttachmentId` <a name="resetSourceTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentId"></a>

```typescript
public resetSourceTransitGatewayAttachmentId(): void
```

##### `resetSourceTransitGatewayAttachmentType` <a name="resetSourceTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.resetSourceTransitGatewayAttachmentType"></a>

```typescript
public resetSourceTransitGatewayAttachmentType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayMeteringPolicyEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayMeteringPolicyEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMeteringPolicyEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.updateEffectiveAt">updateEffectiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlockInput">destinationCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentIdInput">destinationTransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentTypeInput">destinationTransitGatewayAttachmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccountInput">meteredAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumberInput">policyRuleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlockInput">sourceCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentIdInput">sourceTransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentTypeInput">sourceTransitGatewayAttachmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyIdInput">transitGatewayMeteringPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRange">destinationPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentId">destinationTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentType">destinationTransitGatewayAttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccount">meteredAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumber">policyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlock">sourceCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRange">sourcePortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentId">sourceTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentType">sourceTransitGatewayAttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyId">transitGatewayMeteringPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updateEffectiveAt`<sup>Required</sup> <a name="updateEffectiveAt" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.updateEffectiveAt"></a>

```typescript
public readonly updateEffectiveAt: string;
```

- *Type:* string

---

##### `destinationCidrBlockInput`<sup>Optional</sup> <a name="destinationCidrBlockInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlockInput"></a>

```typescript
public readonly destinationCidrBlockInput: string;
```

- *Type:* string

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRangeInput"></a>

```typescript
public readonly destinationPortRangeInput: string;
```

- *Type:* string

---

##### `destinationTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentIdInput"></a>

```typescript
public readonly destinationTransitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `destinationTransitGatewayAttachmentTypeInput`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentTypeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentTypeInput"></a>

```typescript
public readonly destinationTransitGatewayAttachmentTypeInput: string;
```

- *Type:* string

---

##### `meteredAccountInput`<sup>Optional</sup> <a name="meteredAccountInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccountInput"></a>

```typescript
public readonly meteredAccountInput: string;
```

- *Type:* string

---

##### `policyRuleNumberInput`<sup>Optional</sup> <a name="policyRuleNumberInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumberInput"></a>

```typescript
public readonly policyRuleNumberInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceCidrBlockInput`<sup>Optional</sup> <a name="sourceCidrBlockInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlockInput"></a>

```typescript
public readonly sourceCidrBlockInput: string;
```

- *Type:* string

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: string;
```

- *Type:* string

---

##### `sourceTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentIdInput"></a>

```typescript
public readonly sourceTransitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `sourceTransitGatewayAttachmentTypeInput`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentTypeInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentTypeInput"></a>

```typescript
public readonly sourceTransitGatewayAttachmentTypeInput: string;
```

- *Type:* string

---

##### `transitGatewayMeteringPolicyIdInput`<sup>Optional</sup> <a name="transitGatewayMeteringPolicyIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyIdInput"></a>

```typescript
public readonly transitGatewayMeteringPolicyIdInput: string;
```

- *Type:* string

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: string;
```

- *Type:* string

---

##### `destinationTransitGatewayAttachmentId`<sup>Required</sup> <a name="destinationTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentId"></a>

```typescript
public readonly destinationTransitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `destinationTransitGatewayAttachmentType`<sup>Required</sup> <a name="destinationTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentType"></a>

```typescript
public readonly destinationTransitGatewayAttachmentType: string;
```

- *Type:* string

---

##### `meteredAccount`<sup>Required</sup> <a name="meteredAccount" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.meteredAccount"></a>

```typescript
public readonly meteredAccount: string;
```

- *Type:* string

---

##### `policyRuleNumber`<sup>Required</sup> <a name="policyRuleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.policyRuleNumber"></a>

```typescript
public readonly policyRuleNumber: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceCidrBlock`<sup>Required</sup> <a name="sourceCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlock"></a>

```typescript
public readonly sourceCidrBlock: string;
```

- *Type:* string

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: string;
```

- *Type:* string

---

##### `sourceTransitGatewayAttachmentId`<sup>Required</sup> <a name="sourceTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentId"></a>

```typescript
public readonly sourceTransitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `sourceTransitGatewayAttachmentType`<sup>Required</sup> <a name="sourceTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentType"></a>

```typescript
public readonly sourceTransitGatewayAttachmentType: string;
```

- *Type:* string

---

##### `transitGatewayMeteringPolicyId`<sup>Required</sup> <a name="transitGatewayMeteringPolicyId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyId"></a>

```typescript
public readonly transitGatewayMeteringPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMeteringPolicyEntryConfig <a name="Ec2TransitGatewayMeteringPolicyEntryConfig" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

const ec2TransitGatewayMeteringPolicyEntryConfig: ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.meteredAccount">meteredAccount</a></code> | <code>string</code> | The resource owner information responsible for paying default billable charges for the traffic flow. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.policyRuleNumber">policyRuleNumber</a></code> | <code>number</code> | The rule number of the metering policy entry. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.transitGatewayMeteringPolicyId">transitGatewayMeteringPolicyId</a></code> | <code>string</code> | The ID of the transit gateway metering policy for which the entry is being created. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | The list of IP addresses of the instances receiving traffic from the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationPortRange">destinationPortRange</a></code> | <code>string</code> | The list of ports on destination instances receiving traffic from the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentId">destinationTransitGatewayAttachmentId</a></code> | <code>string</code> | The ID of the source attachment through which traffic leaves a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentType">destinationTransitGatewayAttachmentType</a></code> | <code>string</code> | The type of the attachment through which traffic leaves a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.protocol">protocol</a></code> | <code>string</code> | The protocol of the traffic. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceCidrBlock">sourceCidrBlock</a></code> | <code>string</code> | The list of IP addresses of the instances sending traffic to the transit gateway for which the metering policy entry is applicable. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourcePortRange">sourcePortRange</a></code> | <code>string</code> | The list of ports on source instances sending traffic to the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentId">sourceTransitGatewayAttachmentId</a></code> | <code>string</code> | The ID of the source attachment through which traffic enters a transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentType">sourceTransitGatewayAttachmentType</a></code> | <code>string</code> | The type of the attachment through which traffic enters a  transit gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `meteredAccount`<sup>Required</sup> <a name="meteredAccount" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.meteredAccount"></a>

```typescript
public readonly meteredAccount: string;
```

- *Type:* string

The resource owner information responsible for paying default billable charges for the traffic flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#metered_account Ec2TransitGatewayMeteringPolicyEntry#metered_account}

---

##### `policyRuleNumber`<sup>Required</sup> <a name="policyRuleNumber" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.policyRuleNumber"></a>

```typescript
public readonly policyRuleNumber: number;
```

- *Type:* number

The rule number of the metering policy entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#policy_rule_number Ec2TransitGatewayMeteringPolicyEntry#policy_rule_number}

---

##### `transitGatewayMeteringPolicyId`<sup>Required</sup> <a name="transitGatewayMeteringPolicyId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.transitGatewayMeteringPolicyId"></a>

```typescript
public readonly transitGatewayMeteringPolicyId: string;
```

- *Type:* string

The ID of the transit gateway metering policy for which the entry is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#transit_gateway_metering_policy_id Ec2TransitGatewayMeteringPolicyEntry#transit_gateway_metering_policy_id}

---

##### `destinationCidrBlock`<sup>Optional</sup> <a name="destinationCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

The list of IP addresses of the instances receiving traffic from the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_cidr_block Ec2TransitGatewayMeteringPolicyEntry#destination_cidr_block}

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: string;
```

- *Type:* string

The list of ports on destination instances receiving traffic from the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_port_range Ec2TransitGatewayMeteringPolicyEntry#destination_port_range}

---

##### `destinationTransitGatewayAttachmentId`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentId"></a>

```typescript
public readonly destinationTransitGatewayAttachmentId: string;
```

- *Type:* string

The ID of the source attachment through which traffic leaves a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_id}

---

##### `destinationTransitGatewayAttachmentType`<sup>Optional</sup> <a name="destinationTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.destinationTransitGatewayAttachmentType"></a>

```typescript
public readonly destinationTransitGatewayAttachmentType: string;
```

- *Type:* string

The type of the attachment through which traffic leaves a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_type}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol of the traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#protocol Ec2TransitGatewayMeteringPolicyEntry#protocol}

---

##### `sourceCidrBlock`<sup>Optional</sup> <a name="sourceCidrBlock" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceCidrBlock"></a>

```typescript
public readonly sourceCidrBlock: string;
```

- *Type:* string

The list of IP addresses of the instances sending traffic to the transit gateway for which the metering policy entry is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_cidr_block Ec2TransitGatewayMeteringPolicyEntry#source_cidr_block}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: string;
```

- *Type:* string

The list of ports on source instances sending traffic to the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_port_range Ec2TransitGatewayMeteringPolicyEntry#source_port_range}

---

##### `sourceTransitGatewayAttachmentId`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentId"></a>

```typescript
public readonly sourceTransitGatewayAttachmentId: string;
```

- *Type:* string

The ID of the source attachment through which traffic enters a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_id}

---

##### `sourceTransitGatewayAttachmentType`<sup>Optional</sup> <a name="sourceTransitGatewayAttachmentType" id="@cdktn/provider-awscc.ec2TransitGatewayMeteringPolicyEntry.Ec2TransitGatewayMeteringPolicyEntryConfig.property.sourceTransitGatewayAttachmentType"></a>

```typescript
public readonly sourceTransitGatewayAttachmentType: string;
```

- *Type:* string

The type of the attachment through which traffic enters a  transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_type}

---



