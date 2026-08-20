# `networkmanagerDirectConnectGatewayAttachment` Submodule <a name="`networkmanagerDirectConnectGatewayAttachment` Submodule" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerDirectConnectGatewayAttachment <a name="NetworkmanagerDirectConnectGatewayAttachment" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment awscc_networkmanager_direct_connect_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

new networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment(scope: Construct, id: string, config: NetworkmanagerDirectConnectGatewayAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig">NetworkmanagerDirectConnectGatewayAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig">NetworkmanagerDirectConnectGatewayAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedNetworkFunctionGroupChange">putProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedSegmentChange">putProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetProposedNetworkFunctionGroupChange">resetProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetProposedSegmentChange">resetProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetRoutingPolicyLabel">resetRoutingPolicyLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProposedNetworkFunctionGroupChange` <a name="putProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedNetworkFunctionGroupChange"></a>

```typescript
public putProposedNetworkFunctionGroupChange(value: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedNetworkFunctionGroupChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `putProposedSegmentChange` <a name="putProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedSegmentChange"></a>

```typescript
public putProposedSegmentChange(value: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedSegmentChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>[]

---

##### `resetProposedNetworkFunctionGroupChange` <a name="resetProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetProposedNetworkFunctionGroupChange"></a>

```typescript
public resetProposedNetworkFunctionGroupChange(): void
```

##### `resetProposedSegmentChange` <a name="resetProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetProposedSegmentChange"></a>

```typescript
public resetProposedSegmentChange(): void
```

##### `resetRoutingPolicyLabel` <a name="resetRoutingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetRoutingPolicyLabel"></a>

```typescript
public resetRoutingPolicyLabel(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerDirectConnectGatewayAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isConstruct"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformElement"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformResource"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkmanagerDirectConnectGatewayAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerDirectConnectGatewayAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerDirectConnectGatewayAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerDirectConnectGatewayAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.lastModificationErrors">lastModificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList">NetworkmanagerDirectConnectGatewayAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.directConnectGatewayArnInput">directConnectGatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.edgeLocationsInput">edgeLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedNetworkFunctionGroupChangeInput">proposedNetworkFunctionGroupChangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedSegmentChangeInput">proposedSegmentChangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.routingPolicyLabelInput">routingPolicyLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.directConnectGatewayArn">directConnectGatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.edgeLocations">edgeLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModificationErrors`<sup>Required</sup> <a name="lastModificationErrors" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.lastModificationErrors"></a>

```typescript
public readonly lastModificationErrors: string[];
```

- *Type:* string[]

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `proposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedNetworkFunctionGroupChange"></a>

```typescript
public readonly proposedNetworkFunctionGroupChange: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `proposedSegmentChange`<sup>Required</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedSegmentChange"></a>

```typescript
public readonly proposedSegmentChange: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerDirectConnectGatewayAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList">NetworkmanagerDirectConnectGatewayAttachmentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkIdInput"></a>

```typescript
public readonly coreNetworkIdInput: string;
```

- *Type:* string

---

##### `directConnectGatewayArnInput`<sup>Optional</sup> <a name="directConnectGatewayArnInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.directConnectGatewayArnInput"></a>

```typescript
public readonly directConnectGatewayArnInput: string;
```

- *Type:* string

---

##### `edgeLocationsInput`<sup>Optional</sup> <a name="edgeLocationsInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.edgeLocationsInput"></a>

```typescript
public readonly edgeLocationsInput: string[];
```

- *Type:* string[]

---

##### `proposedNetworkFunctionGroupChangeInput`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChangeInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedNetworkFunctionGroupChangeInput"></a>

```typescript
public readonly proposedNetworkFunctionGroupChangeInput: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `proposedSegmentChangeInput`<sup>Optional</sup> <a name="proposedSegmentChangeInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedSegmentChangeInput"></a>

```typescript
public readonly proposedSegmentChangeInput: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a>

---

##### `routingPolicyLabelInput`<sup>Optional</sup> <a name="routingPolicyLabelInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.routingPolicyLabelInput"></a>

```typescript
public readonly routingPolicyLabelInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>[]

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `directConnectGatewayArn`<sup>Required</sup> <a name="directConnectGatewayArn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.directConnectGatewayArn"></a>

```typescript
public readonly directConnectGatewayArn: string;
```

- *Type:* string

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: string[];
```

- *Type:* string[]

---

##### `routingPolicyLabel`<sup>Required</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.routingPolicyLabel"></a>

```typescript
public readonly routingPolicyLabel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerDirectConnectGatewayAttachmentConfig <a name="NetworkmanagerDirectConnectGatewayAttachmentConfig" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

const networkmanagerDirectConnectGatewayAttachmentConfig: networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | The ID of a core network for the Direct Connect Gateway attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.directConnectGatewayArn">directConnectGatewayArn</a></code> | <code>string</code> | The ARN of the Direct Connect Gateway. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.edgeLocations">edgeLocations</a></code> | <code>string[]</code> | The Regions where the edges are located. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>string</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>[]</code> | Tags for the attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

The ID of a core network for the Direct Connect Gateway attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#core_network_id NetworkmanagerDirectConnectGatewayAttachment#core_network_id}

---

##### `directConnectGatewayArn`<sup>Required</sup> <a name="directConnectGatewayArn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.directConnectGatewayArn"></a>

```typescript
public readonly directConnectGatewayArn: string;
```

- *Type:* string

The ARN of the Direct Connect Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#direct_connect_gateway_arn NetworkmanagerDirectConnectGatewayAttachment#direct_connect_gateway_arn}

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: string[];
```

- *Type:* string[]

The Regions where the edges are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#edge_locations NetworkmanagerDirectConnectGatewayAttachment#edge_locations}

---

##### `proposedNetworkFunctionGroupChange`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.proposedNetworkFunctionGroupChange"></a>

```typescript
public readonly proposedNetworkFunctionGroupChange: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#proposed_network_function_group_change NetworkmanagerDirectConnectGatewayAttachment#proposed_network_function_group_change}

---

##### `proposedSegmentChange`<sup>Optional</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.proposedSegmentChange"></a>

```typescript
public readonly proposedSegmentChange: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#proposed_segment_change NetworkmanagerDirectConnectGatewayAttachment#proposed_segment_change}

---

##### `routingPolicyLabel`<sup>Optional</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.routingPolicyLabel"></a>

```typescript
public readonly routingPolicyLabel: string;
```

- *Type:* string

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#routing_policy_label NetworkmanagerDirectConnectGatewayAttachment#routing_policy_label}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>[]

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#tags NetworkmanagerDirectConnectGatewayAttachment#tags}

---

### NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

const networkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange: networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | The name of the network function group to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | The key-value tags that changed for the network function group. |

---

##### `attachmentPolicyRuleNumber`<sup>Optional</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#attachment_policy_rule_number NetworkmanagerDirectConnectGatewayAttachment#attachment_policy_rule_number}

---

##### `networkFunctionGroupName`<sup>Optional</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

The name of the network function group to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#network_function_group_name NetworkmanagerDirectConnectGatewayAttachment#network_function_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

The key-value tags that changed for the network function group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#tags NetworkmanagerDirectConnectGatewayAttachment#tags}

---

### NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

const networkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags: networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#key NetworkmanagerDirectConnectGatewayAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#value NetworkmanagerDirectConnectGatewayAttachment#value}

---

### NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

const networkmanagerDirectConnectGatewayAttachmentProposedSegmentChange: networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.segmentName">segmentName</a></code> | <code>string</code> | The name of the segment to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>[]</code> | The key-value tags that changed for the segment. |

---

##### `attachmentPolicyRuleNumber`<sup>Optional</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#attachment_policy_rule_number NetworkmanagerDirectConnectGatewayAttachment#attachment_policy_rule_number}

---

##### `segmentName`<sup>Optional</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

The name of the segment to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#segment_name NetworkmanagerDirectConnectGatewayAttachment#segment_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>[]

The key-value tags that changed for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#tags NetworkmanagerDirectConnectGatewayAttachment#tags}

---

### NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

const networkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags: networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#key NetworkmanagerDirectConnectGatewayAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#value NetworkmanagerDirectConnectGatewayAttachment#value}

---

### NetworkmanagerDirectConnectGatewayAttachmentTags <a name="NetworkmanagerDirectConnectGatewayAttachmentTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

const networkmanagerDirectConnectGatewayAttachmentTags: networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#key NetworkmanagerDirectConnectGatewayAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#value NetworkmanagerDirectConnectGatewayAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

new networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber">resetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName">resetNetworkFunctionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---

##### `resetAttachmentPolicyRuleNumber` <a name="resetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```typescript
public resetAttachmentPolicyRuleNumber(): void
```

##### `resetNetworkFunctionGroupName` <a name="resetNetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName"></a>

```typescript
public resetNetworkFunctionGroupName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachmentPolicyRuleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput">networkFunctionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `attachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="attachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```typescript
public readonly attachmentPolicyRuleNumberInput: number;
```

- *Type:* number

---

##### `networkFunctionGroupNameInput`<sup>Optional</sup> <a name="networkFunctionGroupNameInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput"></a>

```typescript
public readonly networkFunctionGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```typescript
public readonly networkFunctionGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a>

---


### NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

new networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---


### NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

new networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

new networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber">resetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetSegmentName">resetSegmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>[]

---

##### `resetAttachmentPolicyRuleNumber` <a name="resetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```typescript
public resetAttachmentPolicyRuleNumber(): void
```

##### `resetSegmentName` <a name="resetSegmentName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetSegmentName"></a>

```typescript
public resetSegmentName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachmentPolicyRuleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput">segmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```typescript
public readonly tags: NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList</a>

---

##### `attachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="attachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```typescript
public readonly attachmentPolicyRuleNumberInput: number;
```

- *Type:* number

---

##### `segmentNameInput`<sup>Optional</sup> <a name="segmentNameInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput"></a>

```typescript
public readonly segmentNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>[]

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a>

---


### NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

new networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>[]

---


### NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

new networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>

---


### NetworkmanagerDirectConnectGatewayAttachmentTagsList <a name="NetworkmanagerDirectConnectGatewayAttachmentTagsList" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

new networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.get"></a>

```typescript
public get(index: number): NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>[]

---


### NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference <a name="NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { networkmanagerDirectConnectGatewayAttachment } from '@cdktn/provider-awscc'

new networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerDirectConnectGatewayAttachmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>

---



